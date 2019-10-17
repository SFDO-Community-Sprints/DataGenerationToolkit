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

# UX
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
* Define parameters for various data generators
* Define data sources
    records in SF org
    CSV file
    
    


### Project Resources
* seeding data into sandbox from custom schema (worked on at last spring)
* mapping generator CCI
* Paul's data generator
* need to declaratively specify how data is mapped (need declarative language to describe data shape)
* 










### Project Name
Choose a self-explaining name for your project.

### Project Team
Help us give you the thanks you deserve! Please ensure that all contributing members of the team are included!
* Team Leader(s):
* GitHub Scribe(s):
* List of all Contributors:

### Project Vision (Your first task as a team)
Let people know what the value and intended benefits of your project are. The most successful projects will have an extremely clear and well-articulated vision. Answer these questions before you start talking about solutions:
* What is the big problem that your project is trying to solve?
* Who will be using your project?
* A year from now, how do you see people describing your project?

Use these questions to form a clear vision statement of 3-5 sentences (rough guideline). 

Having trouble? Salesforce.org staff and your fellow sprinters are here to help! Use one of your table's request signs and/or post in the Quip Chat to seek help, and we'll pop by.


### Project Resources
* Indicate if there are any existing Hub Ideas, or product Issues/Bugs that you're solving for. 
* Where can we find additional information on your project? Ie. do you have supporting code in another Repo, do you have documentation in Google, your repo's Wiki, etc.? Be sure to include (or at least links to) all supporting material here. If it's not in your project Repo, it will get lost.

### Project Team Accomplishments
What did the Project Team accomplished during the Sprint?

### Future Contributions (AKA what were you unable to finish at the Sprint)
Often, it takes multiple Sprints to contribute an idea back into the Community. What happens at a Sprint does not stay at a Sprint! If someone were to contribute to this project at the next Sprint what would you want them to work on to move this project forward?<br><br>
* What is your project's Roadmap?

**Important**: If you have specific asks to help move this project forward we would recommend that you list them here, but also create separate Issues for each and add the label of "help wanted". This is a well-worn best practice for projects living in GitHub.
