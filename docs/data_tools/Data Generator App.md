#Data Generator App

_Cost:_ Free
_Type:_ Salesforce AppExchange App
_Level of Effort:_ If you are familiar with your org structure and creating related records, you 
likely can get several levels of related records created in under 3 hours if you are new to the app

##Summary 
[link](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000GBhE8UAL "Data Generator") is a declaritive app will quickly insert thousands of records customized to the unique shape of your Salesforce org.
It is a great start to getting some related records into your org. It’s not likely to have all the possible variations
of data you want, but if you start with the right parent record, are OK doing multiple runs and a bit of trial and error, this 
is a great declaritive tool to get started with. 

##Notes
- Limit of 10000 records per run
- Creates fake, related data based on your org and your inputs
- Works with custom objects
- Reads your metadata to determine available fields/objects
- No error messages when expected records are not created
- AppExchange listing says that you can delete a run, but I see no option to be able to do that
- If validation rules are hit (and possibly duplicate rules as well), it will stop the run. Suggestion is to turn off relevant duplicate rules with a tool like Salesforce Switch from cloudtoolkit.co
- It is very important to understand org model so that you start with the right parent as you can go down to a child record, but not up to a parent record
- You can reuse and modify previous runs
- Does not handle junction objects well given the hierarchical nature of the design


Reviewed by: Cassie Supilowski on 3/3/2022