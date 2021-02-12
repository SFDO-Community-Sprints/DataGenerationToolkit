# Meet Alex #
They are an admin at Friends of Tiny Creek (FTC), an organization dedicated to conserving and restoring micro-ecosystems that larger environmental orgs tend to overlook. Alex has been working at FTC for three years. For such a small organization, they have a lot of data, so Alex has faced many issues trying to keep their data in good shape.

In a typical week, Alex supports the fundraising team as they enter and classify donations, pledges, and donor touchpoints. Alex also manages FTC’s multiple email lists and coordinates the award-winning program, Tiny Tots for Tiny Creeks, which involves managing registration forms, safety releases, and complex program management. Alex has a full plate! Can you relate?

Just like Alex works to steward local waterways, they also steward FTC’s Salesforce instance. Over the years, as FTC’s data got more complicated, Alex learned the hard way to test in a sandbox before making changes in Production. What is a sandbox? We’re so glad you asked! It’s a replica of your Salesforce configuration (including your custom fields, automation, code, everything!) where you can make changes without disrupting the workflow of others.  Once you have thoroughly tested your new functionality, you can move your changes into Production. You guessed it - “Production” is what we call your main Salesforce instance, where your team members enter their data.  [You can learn a lot more about sandboxes here.](https://help.salesforce.com/articleView?id=sf.create_test_instance.htm&type=5)

Alex doesn’t like to dwell on it, but they once uploaded donations from a third party platform and subsequently sent automatic gift acknowledgments to 250 donors who had already received them months ago. Yikes! Fortunately, the donors were gracious about the mistake, but from that day forward, Alex tested all changes in a sandbox first. 

But what does “testing everything in a sandbox” really mean? 

# All About Sandboxes #
Alex learned a few great reasons to use sandboxes (in addition to not accidentally emailing hundreds of donors):
1. Build new features worry-free: If something breaks in your sandbox, it won’t affect your live users or data.
1. Test new features: Not only can you (the admin) test, you can bring in users to help make sure you’re on the right track with your design.
1. [Keep Up With NPSP and Salesforce Releases:](https://powerofus.force.com/s/article/NPSP-Keep-up-with-NPSP-and-Salesforce-Releases) Salesforce has three feature releases per year and NPSP has bi-weekly bug fixes—that’s a lot to test! Sandboxes help you try out and identify which features make sense for your org, AND ensure that new features don’t break your custom processes.
1. Demo your custom Salesforce features without showing confidential data to the world.
1. Train new team members without creating bad data in your system.

## Sandboxes and Metadata ##
What is metadata? Here are some examples: fields, objects, process builders, approval processes, workflow rules. And how do you work with metadata?  Here is one example:  it is helpful to create metadata in a sandbox to test functionality and then [use changesets](https://trailhead.salesforce.com/en/content/learn/modules/declarative-change-set-development) to move your metadata to Production. 

However, metadata is really only helpful if you have data (also known as records!) in the system. When we talk about data in a sandbox, we usually mean sample data. Sample data can be a subset, or sample, of your Production data, or data intended to mimic your Production data. And any old records won’t do! They need to be meaningful and paint a picture of a realistic scenario or persona. Since Friends of Tiny Creek has fundraising, communications, and program data in Salesforce, their sandbox(es) need to have sample data of each type.

The following table shows the types of sample data FTC will create for each of their data types: Fundraising, Communications, and Program Data.

| Data "Type"           | Salesforce objects involved                         | 
| --------------------- | --------------------------------------------------- |
| Fundraising           | Households, Contacts, Opportunities (Donations), Payments, Contact Roles, Soft Credits |
| Communications        | Households, COntacts, Campaigns, Activities |
| Program Data          | Households, Contacts, Cohorts, Programs, Enrollments, Creeks (custom object) |

## Sandbox Data Overview ##
*First thing’s first:  Alex needs to create a sandbox that will contain FTC’s data AND metadata.  First they learned about [Sandbox Types and Templates](https://help.salesforce.com/articleView?id=create_test_instance.htm&type=5) and then followed the steps in [Create a sandbox.](https://help.salesforce.com/articleView?id=data_sandbox_create.htm&type=5) For the kind of testing and building needed, Alex chose to use Developer sandboxes.*

To populate a sandbox with data, there are two required steps:
1. Generate a set of records
1. Import the records into Salesforce

*If Alex just needs a list of Contacts, that's pretty easy to create. Things get more complex when they need to generate related records such as Contacts with Household Accounts that have Open and Closed Activities, some of which relate to Campaigns that contain Opportunities.  Yikes! In the following sections, we’ll follow along with Alex as they tackle simple and complex data sets and learn about tools for importing data into a Salesforce sandbox.*

# How to Generate Data #
*Alex’s sandbox was ready a few minutes after they created it.  When they logged in, the sandbox looked exactly like their regular Salesforce instance, however it was absolutely empty - no data, whatsoever!  Alex’s next adventure is to create records to import.  As with most Salesforce tasks, there is more than one way to do it.  Follow along with Alex as they explore Partial Copy sandboxes as well as other ways to create data - either manually or through code.* 

## Partial Copy Sandbox ##
One way Alex can populate a sandbox with data is to use a Partial Copy Sandbox. When creating a Partial Copy sandbox, a sample of records is copied from the Production org to the sandbox. This is a quick and relatively easy solution.

Like any tool, Partial Copy sandboxes have pros and cons, so it’s important to consider the limitations:
1. You can’t choose which records to copy. Friends of Tiny Creek has a few frequently-used Accounts and Campaigns that they want copied to the sandbox. Partial Copy sandboxes are populated with a random set of records.
1. You may not be able to copy all records. Friends of Tiny Creek wants all of its Engagement Plan Templates in its sandbox, but the Partial Copy sandbox may not include some crucial records.
1. You get a limited number of Partial Copy sandboxes. Alex wants to set up multiple sandboxes for development, testing, and training, but Friends of Tiny Creek’s Salesforce org only includes one Partial Copy sandbox.
1. You can only refresh the sandbox every five days. If you need to reload sample data during the five day period, you have to use a different method.
1. You can only copy data at the time the sandbox is created or refreshed. If you need to load more sample data to an existing sandbox, you have to use a different method.
1. Refreshing the sandbox overwrites any customizations. Alex has a sandbox for creating flows and making other customizations. They want to load new data for testing a new flow, but if they use the sandbox refresh to load the data, their previous work will be lost.
1. The data isn't anonymous. Alex has a sandbox for recording training videos. They want to use made-up names and contact information  so that the videos won’t contain the real donor and client names. The Partial Copy sandbox can only copy data that exists in FTC’s Production org.

## Create Your Own Data ##
*As we've seen, there are significant limitations with Partial Copy sandboxes. But if Alex wants to test and train with data in a sandbox, they need data! Alex did thorough research to identify other ways to create data. Each option has pros and cons, and requires different skills and competencies.*

### Create Records in the User Interface ###
The most straightforward route to getting data into your sandbox is to manually create data. Manually creating data ensures that you get exactly the records (and related records) you need. It doesn’t require extra tools, training, or additional cost. However, creating one record at a time is time consuming. If you need a large amount of data, this might feel daunting. Then again, no one knows your data better than you!

### Use Forms to Expedite your Data Entry ###
Some admins use a third-party form building tools or Screen Flow built in Salesforce to allow you enter data once and populate multiple records.  For example, you can create a form that creates/updates a Contact *and* a Campaign Member record for an event registration.  This can save time when you need a handful of records, but it's not feasible for large datasets, or datasets with unrelated nodes.

### Create Spreadsheets ###
Another method for generating a data set is to create spreadsheets with information about each object you want to include. The advantage is that you can use data you already have, which ensures you have complete datasets. To create these spreadsheets: 
1. Use filtered reports from Production to find the right data and export to a spreadsheet; or
1. Manually create a spreadsheet with fake data.
Your spreadsheet must have a separate tab for each object you want to upload (for example, Households, Opportunities, Contacts, etc.). Each tab should include all required fields and any other fields you want to test. When your spreadsheet file is complete, you’ll need to save each tab as its own .csv file, as most import tools require this format. 

### Use Mockaroo ###
Mockaroo is an online test data generator, and while technically it’s just another method for creating spreadsheets of data, we think it’s helpful enough to warrant its own section. A great benefit of Mockaroo is that it already has a sample [NPSP compatible schema](https://mockaroo.com/4392b3f0) that you can use to generate a sample of test Contacts, Households and donations (Opportunities) in your org. This makes it easier to upload the data with the NPSP Data Import Tool, which we describe later in this document. Keep in mind that the free version of Mockaroo has a limit of 1000 records per file.

### Use Snowfakery ###
[Snowfakery](https://snowfakery.readthedocs.io/en/latest/#snowfakery-documentation) is a free, open source tool for generating fake data that has relationships between tables. In other words, with Snowfakery, you can create Contact-Account relationships without having to create multi-tab spreadsheets and perform a two-step import process.  Amazing! Snowfakery can also automatically generate common, made-up data, like street names, random dollar amounts, email addresses, and much more.

How does Snowfakery know what types of data to create?  By reading a “recipe!”  To use Snowfakery, you write a recipe file in a programming language called YAML. Then, you access Snowfakery through a Command Line interface on your computer. Some comfort with coding is required to use this tool. 

Snowfakery is ideal for creating large volumes of random, but still valid, data and importing that data in one fell swoop.

### Use a Third Party App ###
If test data is what you’re looking for, there are a number of third-party apps out there that will create it for you. Search on the AppExchange for the latest tools or reach out to your fellow Trailblazers in the Trailblazer community for suggestions.

# How to Get Data into Salesforce #
*Alex has learned so much during their #AwesomeAdmin journey, and received tons of support from Trailhead and the Trailblazer Community, so they have developed skills to be able to use all of the data generation methods. Go Alex! Each time Alex needs to populate data in a sandbox, they choose the most appropriate option. Once they have spreadsheets with the data they need, the next step is uploading it to the sandbox.*

## How To Import Data from Spreadsheets #
*Alex used Trailhead modules like [Data Management] (https://trailhead.salesforce.com/content/learn/modules/lex_implementation_data_management?trailmix_creator_id=cassiesupilowski&trailmix_slug=data-generation-toolkit) and the [Import and Export with Data Management Tools](https://trailhead.salesforce.com/content/learn/projects/import-and-export-with-data-management-tools?trailmix_creator_id=cassiesupilowski&trailmix_slug=data-generation-toolkit) project to get hands-on experience with some of the tools below. If you haven’t already explored these resources, we recommend that you do!*

*Each importing option has different pros and cons and requires different skills and competencies. Again, Alex labeled each option with Admin, Developer, and Consultant to indicate the required skill set.*

### NPSP Data Importer ###
If you need to upload donation data into Salesforce, the NPSP Data Importer is a great place to start. Alex initially thought that they would have to upload Contacts, Opportunities, and other records one .csv at a time, but the NPSP Data Importer can process them all at once! Too good to be true?  Not so! The NPSP Data Importer was custom built by Salesforce.org to match with standard NPSP objects (Contact, Household, Opportunity, Payments, Contact Roles, GAU, etc) AND you can extend it to upload custom data to custom objects and fields, as long as those objects are connected to the Contact or Account standard objects.  The NPSP Importer Tool uses a custom object called “NPSP Data Import” which is like a “staging area” for data that will get split apart into Contacts, Households, etc.  That sounds like a lot of jargon, but the truth is, this tool is very powerful and accessible to nonprofit admins anywhere!

If you’re not sure how to get started,  the awesome docs writers at Salesforce.org have you covered with very detailed and helpful resources, such as [How the Import Process Works.](https://powerofus.force.com/s/article/NPSP-How-the-Import-Process-Works#topic-8361)

### Salesforce Data Import Wizard ###
The Data Import Wizard is a free, built-in, easy-to-use tool for importing records one spreadsheet (and one object) at a time.  The Import Wizard has [certain limitations](https://help.salesforce.com/articleView?id=import_limits.htm&type=5) you should be aware of. Three important limitations are: 1) you can only import .csv files, 2) you can only upload 50,000 records at a time, and 3) you can’t use the import wizard for these objects: Assets, Cases, Campaigns, Contracts, Documents, Opportunities, and Products.

### Tip!  Importing data is a multi step process ###
Most data import tools only let you upload one tab/object at a time. If you have several objects to import, such as Organizations and Contacts, you have to decide which one to do first. It’s generally safe to start with Organizations. Using any tool, when you import your Organizations .csv tab, you will end up with: (1) new records in Salesforce, based on your spreadsheet and (2) a new spreadsheet with Organization records and a custom, Unique ID.  This Unique ID will show up in a new column - typically, Column B in your “success file.” And these IDs will come in handy - in fact, you will need to update your Contact tab with this new information before you upload it.

You completed your first upload! Are you ready to move on to the Contacts? First, create a new column next to the Organization Name in your Contacts tab or .csv file. Populate this column with the new Organization ID generated in the previous step. Salesforce reads this ID and creates a Contact that is connected to the right Org. The easiest way to do this is with a VLOOKUP function in Excel or Google Sheets.  

You will need to do this for all of your tabs that have relationships between records, such as Parent Account/Action, Account/Opportunity, Opportunity/Payment, Campaign/Campaign Member/Contact. You likely have custom relationships in your Salesforce that need to be taken into consideration when you are creating data. Uploading data one tab at a time, with VLOOKUPs in between, is time consuming, focus-intensive work. But with a little bit of practice, you can do it!

### Salesforce Data Loader ###
Data Loader is a free, desktop application (you have to download it) for importing records one object/spreadsheet (.csv only) at a time. It’s more flexible than the Data Import Wizard, because it allows you to import any Salesforce object. Similar to the Data Import Wizard, the order in which you import related objects is very important. Additionally, the Data Import Wizard allows you to save mapping templates, which is particularly useful if you frequently upload data from the same template. A best practice is to try a single record to make sure it is mapped correctly before doing the whole import.

### Dataloader.io ###
Dataloader.io is a browser-based data import tool for importing records one object/spreadsheet (.csv only) at a time.  It works similarly to the Data Import Wizard and Data Loader, however it is even more flexible! 

One special feature is the ability to use lookups to find a connected record (without needing to know the Salesforce ID).  It can also save “tasks” for common data uploads.  Many people enjoy the streamlined design of the Dataloader.io interface.

Dataloader.io is available in free and paid editions. With the free version, you can upload 10,000 records each month. 

### Third-Party Apps ###
There are a number of popular third-party apps available to help you load data into Salesforce. Apsona is especially popular with nonprofit organizations and a great place to start in your search.

## No Spreadsheets!  How To Import Data Using Code and Command Line Tools ##
*As Alex gets more comfortable with managing sandboxes and test data, they realize that they need a system for maintaining a central repository of high quality test data that they can use in any Salesforce sandbox.  Plus, Alex is getting tired of uploading data one spreadsheet at a time.  Additionally, FTC’s complex data model has grown beyond what the NPSP Data Import tool can accommodate. What tools can Alex use to super-charge their data generation?*

### CumulusCI (CCI) ###
CumulusCI  is a command-line tool published by Salesforce.org that has generates a mapping of your org—a description of your org’s entity relationship diagram (a.k.a  schema) and data — and then pulls down the data into an SQLite database (basically a text file with comma-separated values). 

Even if you aren’t comfortable with command line tools, it’s possible to follow instructions to link CCI to your sandbox and extract the data. The benefit is that this “just works” with a Salesforce environment; the downside is that it’s not that simple to learn. You can find [instructions in this document](https://docs.google.com/document/d/1bHWkPtuDT6ry_zvU5kEs9pfK5588ALoc_n_q83xfMx4/edit) (which is still under construction).

Once CCI has your schema and your data, you can move it into any sandbox, any time!

### Flow and/or Apex ###
You could create Flows or write Apex classes that generate test data via a series of inserts and, where appropriate, loops. This process is similar to how developers create records to test their code, but in this case, your records you create stay in your database. Any Apex code you write becomes part of your Salesforce instance, so in order to deploy it, you have to meet test coverage requirements, and more. This solution is very time-consuming and heavily org dependent.

Tip: When you load the data, Salesforce runs Validation Rules. So, make sure that your required fields are populated, your picklist values are accurate, and your test data is in good shape! This will ensure that your data is (1) upload-able and (2) good enough to test based on your org’s own data standards.

# Save Test Data Resources for Reuse #
*After all this work to craft a useful data set with related records, Alex wants to preserve it so that they can use it again in the future. This is especially important because each sandbox "refresh" or new sandbox will start out with no data whatsoever. Let's explore their options!*

1. Save Spreadsheet templates
Save a version of the multi-tab spreadsheet (that was converted into separate csv files) as a .xlsx file (or the Mockaroo template).  Follow the same import process next time, now with mock data pre-created!

1. Clone your sandbox
If you have not made *metadata* changes in your Sandbox, but you simply need another identical one (for example, if you are training two new hires at the same time) you can simply Clone it!  The Clone Sandbox function will replicate your *data* and your *metadata* - however, if you need to refresh your Sandbox, this method will not work for saving your data.  Lean more about [Sandbox Cloning here](https://help.salesforce.com/articleView?id=000323476&type=1&mode=1).
	
1. Full Data Export (manually extracted -- Weekly Data Export does not work in sandbox)
This will not directly preserve relationships between records. The exported data will have keys that link a lookup on one spreadsheet to the other, but these won’t be preserved when you reimport.

*Tip* consider [saving these defunct keys](https://docs.google.com/document/d/1ribx8yfg5xd6LnyzJJ2VNfOAT8iAJgZmsyUNwnPP3Es/edit?usp=sharing) in an External Id custom field for future reference.

1. CumulusCI
CCI can save data with keys that link records together and can import records in order, while preserving those keys, into another sandbox or Salesforce org.  Too good to be true?  Nope!  Remember, CCI can be used with, or without, Snowfakery.

1. CumulusCI plus Snowfakery
If you are using CCI and Snowfakery, you can retain a Snowfakery Recipe that includes all of the custom configuration needs of your organization's test data set.  Simply run the appropriate cci command to generate a new dataset, based on your Snowfakery Recipe, to populate your new-or-refreshed Sandbox with data.  Remember, Snowfakery can be used with, or without, CCI.

# Conclusion #
Whoa, that’s a lot of options! Like Alex, it’s OK if you feel a bit overwhelmed.  Pause and remember that building out a Salesforce instance doesn’t happen overnight. And neither does learning all of the great tools at your disposal!   

Here are some of the things that Alex reflected on as they made a plan for testing and training in the FTC Salesforce org:

1. Their current skill set and where they want to learn and grow. How do all of these tools fit into what they already know and how they want to build out their toolkit?
2. The complexity of their Salesforce org. How many custom objects do they have? How much data will they need to accurately test features? 
3. Capacity, budget and timeline. How much time do they have in their day to dedicate to this part of their job and what upcoming projects might benefit from this work?

Alex has learned so much while researching data generation options and you can too! No matter where you are in your story, now that there are [resources](https://docs.google.com/document/d/1ofzF2MHs9orse2cbRBB4gVDams4rI5FLwOmJzBt6wOQ/edit#heading=h.lc5yd14wsgz), tools and a community of Trailblazers out there to support you. Follow along with Alex by completing the [Data Generation Toolkit Resources](https://trailhead.salesforce.com/users/cassiesupilowski/trailmixes/data-generation-toolkit) trailmix!
