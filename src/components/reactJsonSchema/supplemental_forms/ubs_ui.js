export default {
  "ui:order": [
    "ubs_investor_regulation_d_question_1",
    "ubs_investor_acknowledgement_question_2",
    "ubs_investor_acknowledgement_question_2_other_option",
    "ubs_investor_benefit_plan_question_3",
    "*",
    "ubs_government_entity_status_question_4b",
    "ubs_government_entity_status_question_4b1",
  ],
  "ubs_investor_regulation_d_question_1": {
    "ui:description": `Please certify, by checking the appropriate box below, whether the Investor and/or any other person who could be
    deemed to be a Beneficial Owner of the Interests held by the Investor (collectively with the Investor, the “506(d) Covered Person”)
    is subject to any Disqualifying Event (e.g., conviction in the last 10 years of a felony in connection with the purchase or sale of
    any security).`,
    "ui:helpText": "* If the answer to the above question is “Yes”, please contact the Partnership immediately.",
    "ui:widget": "radio"
  },
  "ubs_investor_acknowledgement_question_2": {
    "ui:description": "Please select the appropriate option below that most accurately describes the Investor",
    "ui:widget": "radio"
  },
  "ubs_investor_acknowledgement_question_2_other_option": {
    "ui:title": "Please provide the other option"
  },
  "ubs_investor_benefit_plan_question_3": {
    "ui:widget": "radio",
    "ui:description": `Please certify, by checking the appropriate box below, whether the Investor is or will be described
    in any of the following categories: (1) an “employee benefit plan” (as defined in Section 3(3) of ERISA)
    that is subject to ERISA; (2) a “plan” (as defined in Section 4975(e)(1) of the Code) that is subject to
    Section 4975 of the Code; or (3) an entity which is deemed to be a “benefit plan investor” or to hold
    “plan assets” under the Plan Assets Rules by reason of equity investments in such entity by one or more
    persons described in clause (1) or (2) above. Examples of the foregoing include, among other things, “Keogh”
    plans, other tax-qualified retirement plans, IRAs, certain other types of employee benefit plans (and accounts)
    and entities that are deemed to hold “plan assets” thereof.`
  },
  "signer_type_entity": {
    "ui:widget": "hidden",
  },
  "ubs_government_entity_status_question_4a": {
    "ui:widget": "radio",
  },
  "ubs_government_entity_status_question_4b": {
    "ui:widget": "radio",
    "ui:title": "If the Undersigned is acting as agent, representative or nominee for one or more investors, is any of such investors a Government Entity?"
  },
  "ubs_government_entity_status_question_4b1": {
    "ui:title": "Please indicate the names of any such investor:",
  },
  "ubs_controlling_person_status_question_5": {
    "ui:widget": "radio",
    "ui:description": `Please certify, by checking the appropriate box below, whether the Investor is or will be described in any of the following categories:
    (i) a person or entity that has discretionary authority or control with respect to the assets of the Partnership;
    (ii) a person or entity that provides investment advice for a fee (direct or indirect) with respect to the assets of the Partnership; or
    (iii) an “affiliate” of a person or entity described in clause (i) or (ii) above.  For purposes of this representation, an “affiliate” of
    a person or entity includes any person or entity controlling, controlled by or under common control with the person or entity, including by
    reason of having the power to exercise a controlling influence over the management or policies of the person or entity.`
  },
  "entity_group": {
    "ubs_government_entity_status_question_4a": {
      "ui:widget": "radio",
    },
    "ubs_government_entity_status_question_4b": {
      "ui:widget": "radio",
      "ui:title": "If the Undersigned is acting as agent, representative or nominee for one or more investors, is any of such investors a Government Entity?"
    },
    "ubs_government_entity_status_question_4b1": {
      "ui:title": "Please indicate the names of any such investor:",
    },
    "ubs_controlling_person_status_question_5": {
      "ui:widget": "radio",
      "ui:description": `Please certify, by checking the appropriate box below, whether the Investor is or will be described in any of the following categories:
      (i) a person or entity that has discretionary authority or control with respect to the assets of the Partnership;
      (ii) a person or entity that provides investment advice for a fee (direct or indirect) with respect to the assets of the Partnership; or
      (iii) an “affiliate” of a person or entity described in clause (i) or (ii) above.  For purposes of this representation, an “affiliate” of
      a person or entity includes any person or entity controlling, controlled by or under common control with the person or entity, including by
      reason of having the power to exercise a controlling influence over the management or policies of the person or entity.`
    },
  }
};
