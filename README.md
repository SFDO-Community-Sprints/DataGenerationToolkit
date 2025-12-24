## Data Generation Toolkit

<img src="https://raw.githubusercontent.com/SFDO-Community-Sprints/DataGenerationToolkit/master/Assets/DataGenerationLogoFinal051320.png" width="300" alt="Data Generation Toolkit Logo featuring Astro in a rain of data" style="float:right" >

> This project aims to create toolkit of tools and documentation for generating test data sets based on admin-selected criteria.

> This project a proud part of Salesforce.org Open Source Commons initiative.

**[Read our guide on getting data into your Salesforce Sandbox!](https://sfdo-community-sprints.github.io/DataGenerationToolkit/DataGenGuide)**

### Problem
Salesforce Admins, Developers, and Consultants need to populate test environments with valid data.  The existing methods for completing this task are costly, inefficient, or inaccessible.  Utilizing workaround solutions - or worse, making demos/changes in Production - are disruptive and potentially hazardous.

### Solution
We propose a combination of tooling, documentation, and advocacy efforts that offer technical and recommended best practices the problem described above.  By developing tools like Snowfakery, as well as documenting existing tools and methods, we empower Admins, Developers, and Consultants to populate Salesforce environments with valid data sets.

## Sub-Projects

The Data Generation Toolkit Project consists of several sub-projects, each focused on one area of the larger challenge we are addressing.

### Snowfakery Recipes

Our largest project is our collection of Snowfakery recipes meant to be used for learning and extensions. There are recipes for Salesforce Core, NPSP, EDA, and several open source commons projects.

### Guides

We have generated several guides to help support admins and others use need to seed sandboxes or use Snowfakery for other projects.

You can see all the guides on our [guide index](https://sfdo-community-sprints.github.io/DataGenerationToolkit/).

* [Meet Alex](https://sfdo-community-sprints.github.io/DataGenerationToolkit/DataGenGuide.html)
* Snowfakery Best Practices (Planned)
* Snowfakery cheat sheet (planned)
* Using Recipes (planned)
* [Contributing Recipes](https://github.com/SFDO-Community-Sprints/Snowfakery-Recipe-Templates/tree/main)

### Education Fakery Provider

A [Python-based Faker project](https://pypi.org/project/faker-edu/) to create higher education fake data. Included in Snowfakery since 3.6. Also available as a Python extension that can be used with the main Faker library.  [Code for this library is found on Github.](https://github.com/SFDO-Community-Sprints/Snowfakery-Edu)

### Nonprofit Fakery Provider

A [Python-based Faker project to create nonprofit-related fake data](https://pypi.org/project/faker-nonprofit/). Included in Snowfakery since 3.6. Also available as a Python extension that can be used with the main Faker library. [Code for this library is found on Github.](https://github.com/SFDO-Community-Sprints/Snowfakery-nonprofit)

## General Project Vision/Goals

- Every Admin, Developer, and Consultant has access to test environments populated with valid data
- Ability to generate data sets that follow a story
- Ability to generate data sets that are valid for small, medium, and large data volumes (including LDV) for testing purposes
- Ability to generate data sets that are fake but realistic-seeming
- Open source and free tools facilitate not only data generation, but also sharing best practices *about* data generation between orgs
- High quality documentation guides users to the appropriate method for their data generation goals and how to execute that method
- Support for declarative and developer focused solutions

We keep our most recent full notes from meetings and Sprints in the [project wiki](https://github.com/SFDO-Community-Sprints/DataGenerationToolkit/wiki).


### Working Shared Definitions

- *Test Environments*: this project supports working in sandbox, scratch orgs, or dev orgs.  Certain use cases for production orgs are valid, but should be attempted with caution and care!
- *Data Set*: a collection of related records that include multiple objects and fields.
- *Valid test data*: the resulting data set produced through these methods should meet user-defined critiera, including matching org schema, volume of records, support for record types, custom fields, records related to other records etc.

### Project Meetings

The main project team meets monthly to maintain momentum between sprints. You can contact us through the [Trailblazer Community](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000kHjVSAU) to get details for joining those meetings. Notes from project meetings are recorded on the [wiki for this repository](https://github.com/SFDO-Community-Sprints/DataGenerationToolkit/wiki).

### Project Audience

_All Salesforce Admins and Developers_

This project is aimed at helping ease the process of generating test data for projects. Nearly all Salesforce projects benefit from improving this process.

To help people identify with specific audiences while creating documentation we have created a series of [project personas](https://raw.githubusercontent.com/SFDO-Community-Sprints/DataGenerationToolkit/master/Assets/DataGenPersonas_202102.pdf) that we speak to and about in our materials. This is not a complete picture of everyone who will benefit, but it helps us focus our efforts and may help you understand us.

### Project Leadership Team

Help us give you the thanks you deserve and ensure future contributors know who to contact if they have questions! Please ensure that all contributing members of the team are included.

Team Leader(s):
  - Aaron Crosman (Coastal Cloud)
  - Eilleen Kapp
  - Allison Letts (Attain Partners)
  - Jung Mun
  - Samantha Shain (William Penn Foundation)
  - Cassie Supilowski (OneGoal)

We also keep a [complete list of contributors](https://github.com/SFDO-Community-Sprints/DataGenerationToolkit/wiki/Project-Contributors).  Please add yourself to the list!

## Project References

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
- [Project History](docs/ProjectHistory.md)
