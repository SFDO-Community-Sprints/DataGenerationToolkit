from cumulusci.tasks.salesforce import BaseSalesforceApiTask
from cumulusci.tasks.bulkdata.utils import BulkJobTaskMixin
from cumulusci.core.utils import process_list_arg
import csv


class GenerateRecordPermutations(BaseSalesforceApiTask, BulkJobTaskMixin):
    task_docs = """
        Create sample data for an org.
        """
    task_options = {
        "objects": {
            "description": "A comma seperated list of sObject types to generate.",
            "required": True,
        }
    }

    def _init_options(self, kwargs):
        super()._init_options(kwargs)
        self.options["objects"] = process_list_arg(self.options.get("objects"))

    def _run_task(self):
        # This demonstration supports only one object at a time, but accepts lists.
        # Gather permutable fields for the object
        # Picklists, checkboxes, and Record Type (if present)
        object_name = self.options["objects"][0]
        object_details = getattr(self.sf, object_name).describe()
        field_list = {field["name"]: field for field in object_details["fields"]}
        permutable_values = {}
        for name, f in field_list.items():
            if name == "RecordTypeId":
                # Query Record Types and add their Ids are permutable values
                rt_ids = {
                    rt["Id"]
                    for rt in self.sf.query(
                        "SELECT Id FROM RecordType WHERE SobjectType = '{}'".format(
                            object_name
                        )
                    )["records"]
                }
                permutable_values["RecordTypeId"] = rt_ids
            elif f["type"] == "picklist" and f["custom"]:
                permutable_values[name] = {
                    pl["value"] for pl in f["picklistValues"] if pl["active"]
                }
            elif f["type"] == "boolean" and f["custom"]:
                permutable_values[name] = {"True", "False"}

        populate_name = field_list["Name"]["updateable"]

        def generate_random_name(object_name):
            i = 0
            while True:
                i = i + 1
                yield f"{object_name} {i}"

        def generate_permutations(
            perms,
            template=None,
            populate_name=False,
            name_generator=generate_random_name(object_name),
        ):
            if template is None:
                template = {}

            f = list(perms.keys())[0]
            for v in perms[f]:
                template[f] = v
                next_perms = perms.copy()
                del next_perms[f]
                if next_perms:
                    yield from generate_permutations(
                        next_perms,
                        template,
                        populate_name,
                        name_generator=name_generator,
                    )
                else:
                    if populate_name:
                        template["Name"] = next(name_generator)

                    yield template

        file_name = object_details["labelPlural"]

        with open(f"{file_name}.csv", mode="w") as output_file:
            field_names = list(permutable_values.keys())
            field_names.append("Name")
            writer = csv.DictWriter(output_file, field_names)
            writer.writeheader()
            for row in generate_permutations(
                permutable_values, template=None, populate_name=populate_name
            ):
                writer.writerow(row)

        job_id = self.bulk.create_insert_job(object_name, contentType="CSV")

        with open(f"{file_name}.csv", mode="rb") as input_file:
            batch_id = self.bulk.post_batch(job_id, input_file)

        self.bulk.close_job(job_id)
        result = self._wait_for_job(job_id)
        if result != "Completed":
            raise BulkDataException("Job {} did not complete successfully".format(name))
