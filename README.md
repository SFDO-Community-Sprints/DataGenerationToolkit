### DataGenerationTool
Team from the Philadelphia Sprint focused on building a tool to generate test data

### Project Team
* Team Leader(s): Aaron Crosman
* GitHub Scribe: Kim Snipes
* List of all Contributors: Andrew Curran, Francisco Borges

### Project Vision/Goals
* support QA and project demos
* user friendly interface to generate data
* based on actual org metadata in creation of data sets
* need for medium sized data set that reflects the depth and complexity of the org schema
* need the ability to define the spec of the data that is generated
* process for how you can build test data sets that follow a story
* specifications for what distribution of values across data model would look like
* sketch implementation of tool 

# UX Ideas
* tool doesnt have to be built in Salesforce
* screen one: list of objects in your org
* select what objects you need to generate records for
* distribution of values across fields
* screen two: like schema builder; checks required relationships and allows user to tell the tool how many of each record you need
* click GENERATE button
    * after data is generated, have the ability to select your primary object and generate a report that returns data for main object
    * send data to SFDX to import
    * confirm which org you want to send data to
* SQL - CCI would support importing data
* CSV - DataLoader

* YML file to specify what the data shape is

### Schema of YML File
* Define parameters for various data generators/factories
* what are the different components of the parameters that will define the factories
* Define data sources
    records in SF org
    CSV file
    
    


### Project Resources
* seeding data into sandbox from custom schema (worked on at last spring)
* mapping generator CCI
* Paul's data generator
* need to declaratively specify how data is mapped (need declarative language to describe data shape)




### Project Team Accomplishments

### Future Contributions (AKA what were you unable to finish at the Sprint)

