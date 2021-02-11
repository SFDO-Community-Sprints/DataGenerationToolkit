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
To load snowfakery data into a Salesforce org, you also need CumulusCI. Follow this [Trailhead module](https://trailhead.salesforce.com/content/learn/modules/cumulusci-setup) to set up your machine.

### Generate Data in a Scratch Org


### Generate Data in a Sandbox 


## Resources
[Snowfakery docs](https://snowfakery.readthedocs.io/en/stable/)
[CumulusCI docs](https://cumulusci.readthedocs.io/en/latest/)
