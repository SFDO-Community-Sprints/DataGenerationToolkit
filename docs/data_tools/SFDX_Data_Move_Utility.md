# SFDX Data Move Utility

## Summary

_Cost:_ Free
_Type:_ Command Line Tool/SFDX Plugin
_Level of Effort:_ Quick to get started if you are comfortable with SFDX, JSON, and SOQL. However for complex orgs it could take signficant time to write all the SOQL queries.

This is a plugin to SFDX that does exactly what is says it does: moves data between orgs.

In many ways it is similar to Snowfakery when it first arrived: lots of potential, light on docs with useful examples. We launched a whole work stream to fill that gap for Snowfakery, with the support of the lead developer. Without that kind of support it is unlikely to be worth going into detail in this project. There was a GUI built for it, but that project has been abandoned.



**Strengths:**
- Free.
- Straight forward to use
- Appears fast (uses batch API -- not heavily tested)
- Could be used with CICD solutions

**Weaknesses:**
- Hand writing JSON isn't thrilling
- Hand writing SOQL queries in that JSON isn't thrilling
- only one export file per directory seems a little odd.
- CLI only (well plus JSON, see above)

## Examples Done for Testing and Evaluation

_Lifted Heavily from prject [Quick Start guide](https://help.sfdmu.com/quick-start)._

### Setup

1. Make sure you have SFDX installed.
2. Connect a devhub to SFDX.
3. Install the plugin: `sfdx plugins:install sfdmu`
4. Create a Scratch Org to target: `sfdx force:org:create -f config/project-scratch-def.json -a DataMoveScratch --setdefaultusername`
5. Select a Source Org with data in it to play with (a trailhead should work fine here):
`sfdx auth:web:login --setalias DataMoveSource`


### Use

Create a `export.json` file to move accounts:
```json
{
    "objects": [
        {
            "query": "SELECT Id, Name FROM Account",
            "operation": "Upsert",
            "externalId": "Name"
        }
    ]
}
```

Run move util (your terminal must be in the same directory has the file in previous step):
`sfdx sfdmu:run --sourceusername DataMoveSource --targetusername DataMoveScratch`

_Let's try something more...interesting...Multiple related objects._

```json
{
    "objects": [
        {
            "query": "SELECT Id, Name, AccountNumber, Phone FROM Account",
            "operation": "Upsert",
            "externalId": "Name"
        },
        {
            "query": "SELECT Id, FirstName, LastName, AccountId, Email FROM Contact",
            "operation": "Upsert",
            "externalId": "Id"
        },
        {
            "query": "SELECT Id, AccountId, Description, Name, CaseNumber, ContactEmail, Priority, ContactId FROM Case",
            "operation": "Upsert",
            "externalId": "CaseNumber"

        }
    ]
}

```

rerun command:
`sfdx sfdmu:run --sourceusername DataMoveSource --targetusername DataMoveScratch`


Reviewed By: [Aaron Crosman](https://github.com/acrosman) on 3/3/2022
