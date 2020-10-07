import { LightningElement } from 'lwc';
import jquery from '@salesforce/resourceUrl/jquery';
import jsonEditorStatic from '@salesforce/resourceUrl/jsonEditorStatic';
import { loadScript } from 'lightning/platformResourceLoader';

export default class JsonEditor extends LightningElement {

    jsonEditorStatic = jsonEditorStatic;
    jquery = jquery;
    editor;

    handleBuild() {
        const edElement = this.template.querySelector('div');
        console.log('edElement: '+JSON.stringify(edElement));

        loadScript(this, jquery)
            .then(() => {
                console.log('loaded jquery '+jquery);

                loadScript(this, jsonEditorStatic)
                .then(() => {
                    console.log('loaded jsonEditorStatic '+jsonEditorStatic);
    
                    // Initialize the editor with a JSON schema
                    this.editor = new JSONEditor(edElement,{
                        schema: this.SCHEMA,
                        ...this.OPTIONS
                        });
                });
            });
    }

    handleSubmit() {
        console.log('editor: '+ editor.getValue());
    }

    make_field_definition(default_fake) {
        return {
            "oneOf": [
                {
                    type: "string",
                    options: { grid_columns: 1, input_width: "300px" },
                },
                {
                    type: "object", title: "fake",
                    options: { disable_properties: true, disable_collapse: true },
                    properties:
                    {
                        type: {
                            type: "string", required: true,
                            enum: ["first_name", "last_name", "street", "city", "country", "post_code", "company"],
                            default: default_fake,
                            format: "select2",
                            options: {
                                select2: {
                                    width: '200px'
                                },
                            }
                        }
                    },
                },
                {
                    type: "object", title: "formula",
                    properties:
                    {
                        formula: {
                            type: "string", required: true,
                            options: { grid_columns: 1, input_width: "300px", disable_properties: true, disable_collapse: true },
                        },
    
                    },
                    options: { disable_properties: true, disable_collapse: true },
                },
            ],
        }
    }
    
    COMMON_PROPS = {
        count: {
            type: "integer",
            default: 1,
            options: { grid_columns: 1 },
        },
    }
    
    
    ACCOUNT_FIELDS = {
        Name: {
            $ref: "#/definitions/name"
        },
        BillingStreet: this.make_field_definition("street"),
        BillingCity: this.make_field_definition("city"),
        BillingCountry: this.make_field_definition("country"),
        BillingPostCode: this.make_field_definition("post_code"),
    
        PrimaryContact: {
            $ref: "#/definitions/contact"
        }
    }
    
    CONTACT_FIELDS = {
        FirstName: this.make_field_definition("first_name"),
        LastName: this.make_field_definition("last_names"),
        AccountId: {
            $ref: "#/definitions/account"
        }
    }
    
    make_object_definition(name, fields, default_fields) {
        return {
            type: "object",
            title: name,
            defaultProperties: ["object", "count", "fields"],
            properties: {
                object: { type: "string", template: name, required: true, options: { input_width: "100px", grid_columns: 1, hidden: true } },
                ...this.COMMON_PROPS,
                fields: {
                    type: "object",
                    defaultProperties: default_fields,
                    properties: fields,
                    format: "grid-strict",
                    options: { class: "foo" }
                },
            },
            format: "grid",
        }
    }
    
    SMALL_INPUT = { type: "string", options: { input_width: "100px", grid_columns: 1 } };
    
    MACRO = {
        type: "object",
        title: "macro",
        format: "grid",
        properties: {
            name: this.SMALL_INPUT,
            fields:
                { type: "object", additionalProperties: true }
        },
        defaultProperties: ["name", "fields"],
    }
    
    PLUGINS = {
        type: "array", items: { type: "string" }, title: "plugins", required: true, options: { disable_properties: true, disable_collapse: true },
    };
    
    OBJECTS = {
        type: "array",
        items: {
            "anyOf": [
                { title: "...", format: "hidden", type: "string" },
                {
                    $ref: "#/definitions/account"
                },
                {
                    $ref: "#/definitions/contact"
                },
            ],
        },
        "required": true,
        options: { disable_properties: true, disable_collapse: true },
    };
    
    SCHEMA = {
        type: "object",
        title: "Recipe",
        options: { disable_properties: true, disable_collapse: true },
        properties: {
            objects: this.OBJECTS,
            macros: {
                type: "array", items: { type: this.MACRO }, title: "macros", required: true,
                options: { disable_properties: true, disable_collapse: true },
            },
            plugins: this.PLUGINS,
            include_files: {
                type: "array", items: { type: "string" }, title: "included files", required: true,
                options: { disable_properties: true, disable_collapse: true },
            },
        },
        format: "categories",
        "definitions": {
            "name": this.make_field_definition("company"),
            "account": this.make_object_definition("Account", this.ACCOUNT_FIELDS, ["Name"]),
            "contact": this.make_object_definition("Contact", this.CONTACT_FIELDS, ["FirstName", "LastName"]),
        }
    }
    
    
    OPTIONS = {
        theme: 'spectre',
        iconlib: 'spectre',
        disable_edit_json: true,
        display_required_only: true,
        show_errors: "never",
        keep_oneof_values: false,
        no_additional_properties: true,
        input_width: "100px",
        object_layout: "grid",
    }

}