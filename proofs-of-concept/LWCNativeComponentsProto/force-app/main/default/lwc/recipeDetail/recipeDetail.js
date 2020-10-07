import { LightningElement } from 'lwc';

export default class RecipeDetail extends LightningElement {
    recipe = [
        {
            ObjectName: 'Account',
            Fields: [
                {
                    FieldName: 'AccountName',
                    FixedValue: 'TestCompany',
                },
                {
                    FieldName: 'BillingStreet',
                    FixedValue: '123 My Street',
                },
                {
                    FieldName: 'BillingCity',
                    FixedValue: 'London',
                },
                {
                    FieldName: 'BillingPostalCode',
                    FixedValue: 'E2 8LE',
                },
                {
                    FieldName: 'Website',
                    FixedValue: 'thecompany@test.com',
                },
            ], 
            Children:[
                {
                    ObjectName: 'Contact',
                    Fields: [
                        {
                            FieldName: 'FirstName',
                            FixedValue: 'Joe',
                        },
                        {
                            FieldName: 'LastName',
                            LastName: 'Smith',
                        },
                    ],
                },
                {
                    ObjectName: 'Opportunity',
                    Fields: [
                        {
                            FieldName: 'StageName',
                            FixedValue: 'Closed',
                        },
                    ],
                },
            ], 
        },
        {
            ObjectName: 'User',
            Fields: [
                {
                    FieldName: 'Email',
                    FixedValue: 'test@testing.com',
                },
            ],
        },
    ];

}