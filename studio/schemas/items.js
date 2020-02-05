export default {
    "type": "document",
    "name": "items",
    "title": "Items",
    "fields": [
        {
            "type": "array",
            "name": "item",
            "title": "Item",
            "description": "An item to be placed",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "image",
                            "name": "image",
                            "title": "Item image",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Title",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "string",
                            "name": "description",
                            "title": "Description",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "string",
                            "name": "linkUrl",
                            "title": "URL",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "string",
                            "name": "link",
                            "title": "Link title",
                            "validation": Rule => Rule.required()
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "title"
                        }
                    }
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Items File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "src/data/items.json"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "data"
                ]
            }
        }
    ],
    "singleInstance": true
}