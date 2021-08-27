## Data Generation Toolkit

<img src="https://raw.githubusercontent.com/SFDO-Community-Sprints/DataGenerationToolkit/master/Assets/DataGenerationLogoFinal051320.png" width="300" alt="Data Generation Toolkit Logo featuring Astro in a rain of data" style="float:right" >

> This project aims to create toolkit of tools and documentation for generating test data sets based on admin-selected criteria.

> This project a proud part of Salesforce.org Open Source Commons initiative.

**[Read our guide on getting data into your Salesforce Sandbox!](https://sfdo-community-sprints.github.io/DataGenerationToolkit/DataGenGuide)**

### Problem
Salesforce Admins, Developers, and Consultants need to populate test environments with valid data.  The existing methods for completing this task are costly, inefficient, or inaccessible.  Utilizing workaround solutions - or worse, making demos/changes in Production - are disruptive and potentially hazardous.

### Solution
We propose a combination of tooling, documentation, and marketing efforts that offer technical and cultural solutions to the problem described above.  By developing tools like Snowfakery, as well as documenting existing tools and methods, we empower Admins, Developers, and Consultants to populate test environments with valid data sets.

### Project Vision/Goals
- Every Admin, Developer, and Consultant has access to test environments populated with valid data
- Ability to generate data sets that follow a story
- Ability to generate data sets that are valid for small, medium, and large data volumes (including LDV) for testing purposes
- Ability to generate data sets that are fake but realistic-seeming
- Open source and free tools facilitate not only data generation, but also sharing best practices *about* data generation between orgs
- High quality documentation guides users to the appropriate method for their data generation goals and how to execute that method
- Support for declarative and developer focused solutions
- Striving for admin-friendly UI for creating data sets [tentatively titled SnowMakery] 
- This project places a particular emphasis on leadership development, with active participation from many community members who are underrepresented in technology, less familiar with code solutions, and/or early in their career.  Contributors who "stick" can be described as: ambitious, stubborn, playful, creative
- The Data Generation Toolkit leadership team also maintains the [Snowfakery Recipe Repo](https://github.com/SFDO-Community-Sprints/Snowfakery-Recipe-Templates)

### Working Shared Definitions
- Test Environments: this project supports working in sandbox, scratch orgs, or dev orgs.  We do not support using these methods in Production Salesforce instances
- Data Set: a collection of related records that include multiple objects and fields.
- Valid test data: the resulting data set produced through these methods should meet user-defined critiera, including matching org schema, volume of records, support for record types, custom fields, records related to other records etc.

#### Example Use Cases We Aim to Support:
- Quality assurance (QA) testing an org populated with permutations of all, or nearly all, the types of data that are relevant to the project.
- Be able to reliably and easily load sample data into a given Salesforce org (sandbox, dev, or scratch).
- Have a data set for demos, potentially with the ability to add specific sets of data that could be used for story based training materials.
- Have a data set that ensures the privacy of people represented in the dataset (for example, not real names).
- Have data sets at scales that allow for testing bulk data processing.

### Ongoing Task Streams:

Currently the project team has several major efforts for our work:

- [Maintaining a repository of community-sourced Snowfakery recipes](https://github.com/SFDO-Community-Sprints/Snowfakery-Recipe-Templates)
- Documenting declarative methods and tools to seed Sandboxes with valid data
- Evangelizing Snowfakery through [public events, blog posts,](https://github.com/SFDO-Community-Sprints/DataGenerationToolkit/wiki/Talks---Webinars)

- On hold: Creation of _Snowmakery_ a community supported tool that will empower easy creation of data sets tailored to an org's needs.

### Project Accomplishments:

- [Project Personas](https://raw.githubusercontent.com/SFDO-Community-Sprints/DataGenerationToolkit/master/Assets/DataGenPersonas_202102.pdf): a collection of people we target our documentation about and to.
- [Meet Alex](https://sfdo-community-sprints.github.io/DataGenerationToolkit/DataGenGuide): a guide to populating sandboxes with useful data
- [Snowfakery Example Library](https://github.com/SFDO-Community-Sprints/Snowfakery-Recipe-Templates): a growing collection of Snowfakery data generator recipes for Salesforce.

We keep our most recent full notes from meetings and Sprints in the [project wiki](https://github.com/SFDO-Community-Sprints/DataGenerationToolkit/wiki).

#### Proof of Concept Code:

During the course of this project some ideas have been tested in code, and to ensure that code isn't lost and doesn't confuse other efforts in this repo they are kept in the proofs-of-concept directory.

Currently those include:

1. [A CumulusCI Task](proofs-of-concept/OriginalCciTask) created during this project's first sprint to generate permutations of data.
1. [A web-based Snowfakery recipe editor](proofs-of-concept/SnowmakeryEditory) created during the fall 2020 virtual sprint. This was the second tool named Snowmakery and largely confirmed that this project's UI will bare that name.

### Project Meetings

The main project team meets monthly to maintain momentum between sprints. You can contact us through the [PowerOfUs Hub](https://powerofus.force.com/s/group/0F91E000000brOoSAI/community-project-data-generation) to get details for joining those meetings. Notes from project meetings are recorded on the [wiki for this repository](https://github.com/SFDO-Community-Sprints/DataGenerationToolkit/wiki).

### Project Audience

_All Salesforce Admins and Developers_

This project is aimed at helping ease the process of generating test data for projects. Nearly all Salesforce projects benefit from improving this process.

To help people identify with specific audiences while creating documentation we have created a series of [project personas](https://raw.githubusercontent.com/SFDO-Community-Sprints/DataGenerationToolkit/master/Assets/DataGenPersonas_202102.pdf) that we speak to and about in our materials. This is not a complete picture of everyone who will benefit, but it helps us focus our efforts and may help you understand us.

### Project Leadership Team

Help us give you the thanks you deserve and ensure future contributors know who to contact if they have questions! Please ensure that all contributing members of the team are included.

- Team Leader(s):
  - Aaron Crosman (Attain)
  - Samantha Shain (William Penn Foundation)
  - Cassie Supilowski (OneGoal)
- Salesforce Liason:
  - Paul Prescod (Salesforce.org)

We also keep a [complete list of contributors](https://github.com/SFDO-Community-Sprints/DataGenerationToolkit/wiki/Project-Contributors).  Please add yourself to the list!

### Past Project Accomplishments

- *Between Feb '21 Virtual Sprint and present*
  - Moved Snowfakery recipe cookbook into an independent, community maintained repo
  - Designed Meeting in a Box for User Group and Conference presentations on sandbox seeding
  - Defined use case for seeding a sandbox with a Flow
  - Scheduled quarterly, public Snowfakery trainings
- *Between Sept '20 Virtual Sprint and Feb '21 Virtual Sprint*
  - Completed first full draft of Data Generation Guide document; including technical edit
  - Kicked the tires on Snowfakery, for real
  - Made several public presentations
  - Implemented Project Boards to track issues and discussion topics
  - Survived despite pandemic, fascism, etc.
- *9/23/20-9/24/20 Virtual Sprint*
  - Drafted architecture diagrams for a UI to sit on top of Snowfakery. This will be called _Snowmakery!_ There are two proof of concepts that have been initiated. One is inside of the org, the other is in Heroku.
  - Analyzed survey data from 75 community members; updated relevant Personas based on survey insights
  - Established document outline and Admin Story for documentation project that describes how to Generate Data and Move Data between orgs
  - Documented limitations and considerations for Partial Data sampling algorithm and manual steps, third party apps, and code for creating mock data records
  - Documented steps for an Admin-audience to use CCI to move data records from one Dev Sandbox to another Dev Sandbox (or any two persistent orgs)
  - QA-ed documentation steps for CCI steps (referenced above)
- *3/31/20 -> 4/1/20 virtual sprint*
  - Determined that Snowfakery accomplishes many of the original requirements brainstormed at the Philly Sprint (fall 2019) (namely: ability to generate mock data with related tables, random names and values, standard and custom objects, datasets of any size/scale, ability to populate Salesforce orgs)
  - Socialized Snowfakery to community members
  - Onboarded project leadership from multiple orgs and began application for inclusion in Open Source Commons program
  - Refined use cases and differentiated Snowfakery from (1) existing tools in the market (2) proprietary tools at Salesforce (3) Full Sandbox product
  - Brainstormed 2+ potential directions for extending Snowfakery to include an admin-friendly web interface
  - Reviewed documentation and install steps
  - Overhauled ReadMe file

## Additional Useful References

- [Project Meeting Notes](https://github.com/SFDO-Community-Sprints/DataGenerationToolkit/wiki).
- [Snowfakery](https://github.com/SFDO-Tooling/Snowfakery)
  - [Main Docs](https://snowfakery.readthedocs.io/en/docs/)
  - [Paul's SF Architechs blog on snowfakery](https://medium.com/salesforce-architects/generate-realistic-datasets-with-snowfakery-5349225b033d)
  - [Snowfakery SF Examples](https://github.com/SFDO-Tooling/Snowfakery/tree/master/examples)
  - [Aaron’s Noodling on a recipe editor (not currently functional)](https://github.com/acrosman/snowmakery)
  - [Aarons blog post about generating NPSP Data](https://spinningcode.org/2020/11/generate-sample-data-for-salesforce-npsp/)
  - [Samantha's Blog post about using Snowfakery](https://thedataarealright.blog/2021/01/15/snowfakery-till-you-makery/)
- [Fellow Developers, What Should Our Last Name Be?](https://dev.to/roygreenfeld/fellow-developers-what-should-our-last-name-be-cle)
- [Data Management with CumulusCI Trailhead](https://trailhead.salesforce.com/en/content/learn/modules/data-management-with-cumulusci?trail_id=build-applications-with-cumulusci)
- [Data Generation Toolkit project on Power of Us Hub](https://powerofus.force.com/s/group/0F91E000000brOoSAI/community-project-data-generation)
- [Smart Sandbox](https://www.smartsandbox.com/index.html): their website is still up but no longer active
- [Faker Documentation](https://faker.readthedocs.io/en/master/)
- [NPSP Data Dictionary](https://attain-projects.quip.com/yD1wAsdz1m1Q/NPSP-Public-Data-Dictionary)
- [Wave Data Generator](https://github.com/ttse-sfdc/sfdc-wave-data-generator) (generates data for Salesforce org, and builds linkages between objects)
- [JSON/YAML Editor](https://json-editor.github.io/json-editor/)
