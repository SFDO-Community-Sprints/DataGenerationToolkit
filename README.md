
![](https://github.com/SFDO-Sprint-2019-Philadelphia/DataGenerationTool/blob/master/Assets/Data%20Generation%20Logo%20Idea%20v01_small.png)

_HUGE props to Cisco for the logo!!!!_

### Project Name
Data Generation Tool

### Project Theme
How would you categorize your project? For example, are you creating an app and/or component, writing documentation, focusing on the community ecosystem, making videos, etc. [Learn how](https://github.com/SFDO-Community-Sprints/Welcome/wiki/SFDO-Community-Sprints-Topic-Overview) this information loops back into Sprint project work!

### Project Vertical
How would you define the audience for your project? For example, nonprofits, education, or everyone. [Learn how](https://github.com/SFDO-Community-Sprints/Welcome/wiki/SFDO-Community-Sprints-Topic-Overview) this information loops back into Sprint project work!

### Hub Group Link
https://powerofus.force.com/s/group/0F91E000000brOoSAI/data-generation-tool

### Current Project Team
Help us give you the thanks you deserve and ensure future contributors know who to contact if they have questions! Please ensure that all contributing members of the team are included.
* Team Leader(s): 
* GitHub Scribe(s): 
* List of all Contributors:

## Past Project Team

Full Name | Team Role | Github username
------------ | ------------- | -------------
Aaron Crosman | Team Leader | [acrosman](https://github.com/acrosman)
Kim Snipes | GitHub Scribe | [kimsnipes](https://github.com/kimsnipes)
Andrew Curran | Contributor | [andrew-curran](https://github.com/andrew-curran)
Francisco Borges | Contributor
Fatama Ahmed | Contributor
Jason Lantz | Contributor | [jlantz](https://github.com/jlantz)
David Reed | Contributor | [davidmreed](https://github.com/davidmreed)
Allison Letts | Contributor | [allisonletts](https://github.com/allisonletts)

## Project Description
This project aims to cretae a tool that will generate test data based on user-selected criteria. 

Major use cases could include:
* Having a set of data for QA of an org that includes permutations of all, or nearly all, the types of data that are relavent to the project.
* Generate a data set complete enough for demos, potentially with the ability to add specific sets of data that could be used for story based training materials.
* Generate a set of data at scales that allow for testing bulk data processing.

### Project Vision

Develop standardized System Admin and Business Analyst job descriptions and build alignment around them throughout the SFDO ecosystem (customers, consultants, etc). Develop models for Salesforce team structures within nonprofit organizations. Catalog resources for effective CRM leadership in nonprofits beyond what is covered within certification materials. For use by Salesforce Administrators and consultants who need test data for QA, demos, testing etc.

## Project Vision/Goals
* support QA and project demos
* user friendly interface to generate data
* based on actual org metadata in creation of data sets
* need for medium sized data set that reflects the depth and complexity of the org schema
* need the ability to define the spec of the data that is generated
* process for how you can build test data sets that follow a story
* specifications for what distribution of values across data model would look like
* sketch implementation of tool

### Project Resources (It's ok if you'd prefer to type all the things in Google docs, Quip, or your word processor of choice, just please make sure you include links to your work here in Github. We need a source of truth, and for now that's here in GitHub.)
* seeding data into sandbox from custom schema (worked on at last spring)
* mapping generator CCI
* Paul's data generator for LDV (internal SFDO)
* need to declaratively specify how data is mapped (need declarative language to describe data shape)

### Current Project Team Accomplishments
What did the Project Team get done during the Sprint?o include (or at least links to) all supporting material here. If it's not in your project Repo, it will get lost.

### Project Team Accomplishments (YTD)
* Created initial list of use cases as issues on this repository.
* Drafted UI/UX for the tool in the Wiki

#### UX Ideas 
**See the [Wiki](https://github.com/SFDO-Sprint-2019-Philadelphia/DataGenerationTool/wiki/Data-Generation-Tool-UI-Ideas) for more details**
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

#### Schema of YML File
* Define parameters for various data generators/factories
* what are the different components of the parameters that will define the factories
* Define data sources:
    * records in SF org
    * CSV file
    * Generated data

### Future Contributions (AKA what were you unable to finish at the Sprint)
Often, it takes multiple Sprints to contribute an idea back into the Community. What happens at a Sprint does not stay at a Sprint! If someone were to contribute to this project at the next Sprint what would you want them to work on to move this project forward?<br>

* What types of team roles does this project require? This gives you a way to tell future volunteers what kinds of tasks you need help with to complete this project. For example: Do you need a developer, documentation writer, qa tester, thought-leader, general volunteers, etc.

* What is your project's Roadmap?

**Important**: If you have specific asks to help move this project forward we would recommend that you list them here, but also create separate Issues for each and add the label of "help wanted". This is a well-worn best practice for projects living in GitHub.
