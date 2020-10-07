function make_field_definition(default_fake) {
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
    BillingStreet: make_field_definition("street"),
    BillingCity: make_field_definition("city"),
    BillingCountry: make_field_definition("country"),
    BillingPostCode: make_field_definition("post_code"),

    PrimaryContact: {
        $ref: "#/definitions/contact"
    }
}

CONTACT_FIELDS = {
    FirstName: make_field_definition("first_name"),
    LastName: make_field_definition("last_names"),
    AccountId: {
        $ref: "#/definitions/account"
    }
}

function make_object_definition(name, fields, default_fields) {
    return {
        type: "object",
        title: name,
        defaultProperties: ["object", "count", "fields"],
        properties: {
            object: { type: "string", template: name, required: true, options: { input_width: "100px", grid_columns: 1, hidden: true } },
            ...COMMON_PROPS,
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
        name: SMALL_INPUT,
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
        objects: OBJECTS,
        macros: {
            type: "array", items: { type: MACRO }, title: "macros", required: true,
            options: { disable_properties: true, disable_collapse: true },
        },
        plugins: PLUGINS,
        include_files: {
            type: "array", items: { type: "string" }, title: "included files", required: true,
            options: { disable_properties: true, disable_collapse: true },
        },
    },
    format: "categories",
    "definitions": {
        "name": make_field_definition("company"),
        "account": make_object_definition("Account", ACCOUNT_FIELDS, ["Name"]),
        "contact": make_object_definition("Contact", CONTACT_FIELDS, ["FirstName", "LastName"]),
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