export default {
  "type": "object",
  "properties": {
    "ubs_investor_regulation_d_question_1": {
      "title": "Certification Regarding Status of Investor Under Rule 506(d) of Regulation D",
      "type": "boolean"
    },
    "ubs_investor_acknowledgement_question_2": {
      "title": "Investor Acknowledgement",
      "type": "string",
      "oneOf": [{
          "const": "us",
          "title": "An individual that is a United States Person (including his or her trusts)",
        },
        {
          "const": "non_us",
          "title": "An individual that is not a United States Person (including his or her trusts)"
        },
        {
          "const": "broker",
          "title": "A broker-dealer"
        },
        {
          "const": "insurance",
          "title": "An insurance company"
        },
        {
          "const": "investment",
          "title": "An investment company registered with the U.S. Securities and Exchange Commission"
        },
        {
          "const": "3c_company",
          "title": "A 3(c)(1) or 3(c)(7) Company"
        },
        {
          "const": "non_profit",
          "title": "A non-profit"
        },
        {
          "const": "pension",
          "title": "A pension plan (excluding a governmental pension plan)"
        },
        {
          "const": "banking",
          "title": "A banking or thrift institution (proprietary)"
        },
        {
          "const": "state_entity",
          "title": "A state or municipal Government Entity (excluding a governmental pension plan)"
        },
        {
          "const": "state_pension",
          "title": "A state or municipal governmental pension plan"
        },
        {
          "const": "foreign_fund",
          "title": "A sovereign wealth fund and foreign official institution"
        },
        {
          "const": "other",
          "title": "Other"
        },
      ]
    },
    "ubs_investor_benefit_plan_question_3": {
      "title": "Benefit Plan Investor Representations",
      "type": "boolean"
    },
    "signer_type_entity": {
      "type": "boolean"
    },
  },
  "dependencies": {
    "ubs_investor_acknowledgement_question_2": {
      "if": {
        "properties": { "ubs_investor_acknowledgement_question_2": { "const": "other" } }
      },
      "then": {
        "properties": {
          "ubs_investor_acknowledgement_question_2_other_option": {
            "type": "string"
          },
        },
        "required": ["ubs_investor_acknowledgement_question_2_other_option"]
      }
    },
    "signer_type_entity": {
      "if": {
        "properties": { "signer_type_entity": { "const": true } }
      },
      "then": {
        "properties": {
          "ubs_government_entity_status_question_4a": {
            "title": "Is the Investor a Government Entity?",
            "type": "boolean"
          },
          "ubs_government_entity_status_question_4b": {
            "type": "boolean"
          },
          "ubs_controlling_person_status_question_5": {
            "title": "Controlling Person Status",
            "type": "boolean"
          }
        }
      }
    },
    "ubs_government_entity_status_question_4b": {
      "if": {
        "properties": {
          "ubs_government_entity_status_question_4b": { "const": true }
        }
      },
      "then": {
        "properties": {
          "ubs_government_entity_status_question_4b1": {
            "type": "string"
          }
        },
        "required": [
          "ubs_government_entity_status_question_4b1"
        ]
      }
    }
  },
};
