# Snowfakery Sample for Education Data Architecture (EDA)
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

1. Generate sample data locally. Run Snowfakery with the `eda_objects.yml` file to generate output on your local machine.

   ```
   snowfakery snowfakery_samples/EDA/eda_objects.yml
   ```

## Generate Data in a Salesforce Org
To load snowfakery data into a Salesforce org, you also need to install the Salesforce CLI and CumulusCI and connect to a Salesforce Dev Hub org. Follow this [Trailhead module](https://trailhead.salesforce.com/content/learn/modules/cumulusci-setup) to get set up. 

### Generate Data in a Scratch Org
1. Navigate to the root folder of the project that is organized wtih source format.

1. Initialize CumulusCI configuration in the project

   ```
   cci project init
   ```
   Make sure you enter `sfdx` for the source format and indicate that you are extending EDA as part of the setup wizard.

1. Add a snowfakery recipe to the datasets directory

1. Create a new scratch org with EDA installed using CumulusCI
   ```
   cci flow run dev_org --org dev
   ```

1. Load the sample data from the snowfakery 
   ```
   # example below assumes the snowfakery recipe is located datasets/simple.yml
   cci task run generate_and_load_from_yaml -o generator_yaml datasets/simple.yml --org dev
   ```

### Generate Data in a Sandbox 


## Resources
- [Snowfakery docs](https://snowfakery.readthedocs.io/en/stable/)
- [CumulusCI docs](https://cumulusci.readthedocs.io/en/latest/)
