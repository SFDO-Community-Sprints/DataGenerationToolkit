# Snowfakery Sample for Program Management Module (PMM)
These instructions explain how to create sample data using for EDA objects using the sample files in the snowfakery_samples directory.

## Install Snowfakery

1. Install Python. Python is usually pre-installed on MacOS. See [CumulusCI installation instructions](https://cumulusci.readthedocs.io/en/latest/install.html) for installing on Windows

1. Install pipx

   ```
   pip3 install pipx

   # add pipx to your path and restart your terminal if necessary
   ```

1. Install snowfakery 

   ```
   pipx install snowfakery
   
   # test the installation
   snowfakery --version
   ```

1. Generate sample data locally. Run Snowfakery with the `pmm_1_program-service.recipe.yml` file to generate output on your local machine.

   ```
   snowfakery snowfakery_samples/PMM/pmm_1_program-service.recipe.yml
   ```

## Generate Data in a Salesforce Org
To load snowfakery data into a Salesforce org, you also need to install the Salesforce CLI and CumulusCI and connect to a Salesforce Dev Hub org. Follow this [Trailhead module](https://trailhead.salesforce.com/content/learn/modules/cumulusci-setup) to get set up. 

### Generate Data in a Scratch Org
1. Navigate to the root folder of the project that is organized wtih source format.

1. Initialize CumulusCI configuration in the project

   ```
   cci project init
   ```
   Make sure you enter `sfdx` for the source format and indicate that you are extending PMM as part of the setup wizard.

1. Add a snowfakery recipe to the datasets directory

1. Create a new scratch org with PMM installed using CumulusCI
   ```
   cci flow run dev_org --org dev
   ```

1. Load the sample data from the snowfakery 
   ```
   # example below assumes the snowfakery recipe is located datasets/simple.yml
   cci task run generate_and_load_from_yaml -o generator_yaml datasets/simple.yml --org dev
   ```

### Generate Data in a Sandbox 

### CumulusCI Custom Tasks

1. Add a PMM Custom Task to `cumulusci.yml`

To define a new task for your project, add the task name under the tasks section of your cumulusci.yml file. Continue reading [CulumusCI Documentation](https://cumulusci.readthedocs.io/en/latest/config.html?highlight=add%20task#add-a-custom-task)
```
tasks:
    generate_pmm_data:
        description: Deploy PMM Data
        group: SFDO Mock Data
        class_path: 
            cumulusci.tasks.bulkdata.generate_and_load_data_from_yaml.GenerateAndLoadDataFromYaml
        options:
            generator_yaml: snowfakery_samples/PMM/pmm_1_program-service.recipe.yml
            num_records: 100
            num_records_tablename: pmdm__Program__c
```
2. Run PMM Custom Task
```
# cci task run <name> --org dev
cci task run generate_pmm_data --org dev
```
### CumulusCI Custom Flows

1. Add a Custom Flow to `cumulusci.yml`

```
flows:
    generate_sfdo_data:
        group: SFDO Mock Data
        description: generate npsp data.
        steps:
            1:
                task: <name> 
            2:
                task: generate_pmm_data
```
2. Run a Custom Flow
```
cci flow run <name> --org <org>
cci flow run generate_sfdo_data --org dev
```

## Resources
- [Snowfakery docs](https://snowfakery.readthedocs.io/en/stable/)
- [CumulusCI docs](https://cumulusci.readthedocs.io/en/latest/)
