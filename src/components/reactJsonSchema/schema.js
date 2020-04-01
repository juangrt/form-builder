export default {
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "title": "Name",
      "descriptionTitle": "Please give us your given name",
      "description": "Enter your Name",
      "helpText": " A single text field that can be used to display additional text."
    },
    "email": {
      "type": "string",
      "title": "Email",
      "descriptionTitle": "Please provide your email",
      "description": "Enter your Email address",
      "error": "Invalid email",
      "helpText": " A single text field that can be used to display additional text."
    },
    "details": {
      "type": "string",
      "title": "Describe yourself",
      "descriptionTitle": "Small description",
      "description": "Please give us a small description about yourself",
      "helpText": " A single text field that can be used to display additional text."
    },
    "multipleChoicesList": {
      "type": "array",
      "descriptionTitle": "A multiple choices list",
      "description": "Select as many as options as you want...",
      "helpText": "Choose wisely....",
      "items": {
        "type": "string",
        "enum": [
          "Option 1",
          "Option 2",
          "Option 3",
          "Option 4"
        ]
      },
      "uniqueItems": true
    },
    "say_yes_or_no": {
      "type": "boolean",
      "descriptionTitle": "This is a radio option for yes/no questions",
      "description": "When a question requires yes/no answers",
      "helpText": "Choose wisely....",
      "oneOf": [
        {
          "const": true,
          "title": "Yes"
        },
        {
          "const": false,
          "title": "No"
        }
      ]
    },
    "choose_one": {
      "type": "string",
      "descriptionTitle": "This is a radio group",
      "description": "When only one option applies",
      "helpText": "Choose wisely....",
      "enum": [
        "No",
        "Yes: One",
        "Yes: More than one"
      ],
      "default": "No"
    },
    "done": {
      "type": "boolean",
      "title": "Yes, I'm done",
      "description": "Are you done?",
      "default": false
    }
  },
  "dependencies": {
    "choose_one": {
      "oneOf": [
        {
          "properties": {
            "choose_one": {
              "enum": [
                "No"
              ]
            }
          }
        },
        {
          "properties": {
            "choose_one": {
              "enum": [
                "Yes: One"
              ]
            },
            "option_2": {
              "type": "string"
            }
          }
        },
        {
          "properties": {
            "choose_one": {
              "enum": [
                "Yes: More than one"
              ]
            },
            "conditioned": {
              "type": "number",
              "title": "Conditioned value",
              "descriptionTitle": "This field only appears sometimes",
              "description": "If the user chooses option 'Yes: More than one'",
              "helpText": "Type whatever you want",
              "default": 100
            }
          }
        }
      ]
    },
    "conditioned": {
      "properties": {
        "billing_address": {
          "type": "string",
          "title": "More conditioned",
          "descriptionTitle": "This field only appears sometimes",
          "description": "If the user fills the 'Conditioned value'",
          "helpText": "Type whatever you want",
        }
      }
    }
  }
};
