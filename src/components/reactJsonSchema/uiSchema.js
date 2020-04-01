import {
  CustomFieldTemplate,
  ObjectFieldTemplate,
  SwitchField,
  TextInputField,
  TextAreaField,
  CheckboxGroupField,
  RadioGroupField,
  NumberInputField,
} from './customComponents';

export default {
  "ui:FieldTemplate": CustomFieldTemplate,
  "ui:ObjectFieldTemplate": ObjectFieldTemplate,
  "ui:order": [
    "choose_one",
    "option_2",
    "conditioned",
    "billing_address",
    "name",
    "email",
    "*",
  ],
  "done": {
    "ui:options": {
      label: false
    },
    "ui:field": SwitchField
  },
  "name": {
    "ui:options": {
      label: false
    },
    "ui:field": TextInputField
  },
  "email": {
    "ui:options": {
      label: false
    },
    "ui:field": TextInputField
  },
  "details": {
    "ui:options": {
      label: false
    },
    "ui:field": TextAreaField
  },
  "multipleChoicesList": {
    "ui:options": {
      label: false
    },
    "ui:field": CheckboxGroupField
  },
  "say_yes_or_no": {
    "ui:options": {
      label: false
    },
    "ui:field": RadioGroupField
  },
  "choose_one": {
    "ui:options": {
      label: false
    },
    "ui:field": RadioGroupField
  },
  "conditioned": {
    "ui:options": {
      label: false
    },
    "ui:field": NumberInputField
  },
  "billing_address": {
    "ui:options": {
      label: false
    },
    "ui:field": TextAreaField
  },
  "option_2" : {
    "ui:options": {
      label: false
    },
    "ui:field": TextAreaField
  }
};
