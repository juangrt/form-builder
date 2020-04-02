export default {
  id: 'supplementalForm',
  title: '',
  sections: [
    {
      id: '',
      title: '',
      subsections: [
        {
          id: 'investor_acknowledgement',
          title: '',
          fields: [
            {
              id: 'signer_type_entity',
              type: 'boolean',
              title: '',
              showCondition: {
                type: 'EMPTY',
                not: true,
                expression: {
                  type: 'CONST',
                  id: 'signer_type_entity'
                }
              }
            },
            {
              id: 'info_1',
              type: 'info',
              title: 'Certification Regarding Status of Investor Under Rule 506(d) of Regulation D',
              content: 'Please certify, by checking the appropriate box below, whether the Investor and/or any other person who could be deemed to be a Beneficial Owner of the Interests held by the Investor (collectively with the Investor, the “506(d) Covered Person”) is subject to any Disqualifying Event (e.g., conviction in the last 10 years of a felony in connection with the purchase or sale of any security).',
            },
            {
              id: 'ubs_investor_regulation_d_question_1',
              title: '',
              type: 'boolean',
              options: [
                { title: "Yes" },
                { title: "No" }
              ]
            },
            {
              id: 'info_2',
              type: 'info',
              title: 'Investor Acknowledgement',
              content: 'Please select the appropriate option below that most accurately describes the Investor',
            },
            {
              id: 'ubs_investor_acknowledgement_question_2',
              title: '',
              type: 'string',
              options: [
                {
                  id: "us",
                  title: "An individual that is a United States Person (including his or her trusts)",
                },
                {
                  id: "non_us",
                  title: "An individual that is not a United States Person (including his or her trusts)"
                },
                {
                  id: "broker",
                  title: "A broker-dealer"
                },
                {
                  id: "insurance",
                  title: "An insurance company"
                },
                {
                  id: "investment",
                  title: "An investment company registered with the U.S. Securities and Exchange Commission"
                },
                {
                  id: "3c_company",
                  title: "A 3(c)(1) or 3(c)(7) Company"
                },
                {
                  id: "non_profit",
                  title: "A non-profit"
                },
                {
                  id: "pension",
                  title: "A pension plan (excluding a governmental pension plan)"
                },
                {
                  id: "banking",
                  title: "A banking or thrift institution (proprietary)"
                },
                {
                  id: "state_entity",
                  title: "A state or municipal Government Entity (excluding a governmental pension plan)"
                },
                {
                  id: "state_pension",
                  title: "A state or municipal governmental pension plan"
                },
                {
                  id: "foreign_fund",
                  title: "A sovereign wealth fund and foreign official institution"
                },
                {
                  id: "other",
                  title: "Other",
                  fields: [
                    {
                      id: 'other_option',
                      type: 'string',
                      title: 'Please provide the other option',
                      showCondition: {
                        type: 'CONTAINS',
                        expressions: [
                          {
                              type: 'FORM_RESPONSE',
                              id: 'ubs_investor_acknowledgement_question_2'
                          },
                          {
                              type: 'CONST',
                              value: 'other'
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: 'info_3',
              type: 'info',
              title: 'Benefit Plan Investor Representations',
              content: 'Please certify, by checking the appropriate box below, whether the Investor is or will be described in any of the following categories: (1) an “employee benefit plan” (as defined in Section 3(3) of ERISA) that is subject to ERISA; (2) a “plan” (as defined in Section 4975(e)(1) of the Code) that is subject to Section 4975 of the Code; or (3) an entity which is deemed to be a “benefit plan investor” or to hold “plan assets” under the Plan Assets Rules by reason of equity investments in such entity by one or more persons described in clause (1) or (2) above. Examples of the foregoing include, among other things, “Keogh” plans, other tax-qualified retirement plans, IRAs, certain other types of employee benefit plans (and accounts) and entities that are deemed to hold “plan assets” thereof.',
            },
            {
              id: 'ubs_investor_benefit_plan_question_3',
              title: '',
              type: 'boolean',
              options: [
                { title: "Yes" },
                { title: "No" }
              ]
            },
            {
              id: 'info_4',
              type: 'info',
              title: 'Government Entity Status',
              content: '',
              showCondition: {
                type: 'EQUAL',
                expressions: [
                  {
                      type: 'FORM_RESPONSE',
                      id: 'signer_type_entity'
                  },
                  {
                      type: 'CONST',
                      value: true
                  }
                ]
              }
            },
            {
              id: 'ubs_government_entity_status_question_4a',
              title: 'Is the Investor a Government Entity?',
              type: 'boolean',
              options: [
                { title: "Yes" },
                { title: "No" }
              ],
              showCondition: {
                type: 'EQUAL',
                expressions: [
                  {
                      type: 'FORM_RESPONSE',
                      id: 'signer_type_entity'
                  },
                  {
                      type: 'CONST',
                      value: true
                  }
                ]
              }
            },
            {
              id: 'ubs_government_entity_status_question_4b',
              title: 'If the Undersigned is acting as agent, representative or nominee for one or more investors, is any of such investors a Government Entity?',
              type: 'boolean',
              options: [
                { title: "Yes" },
                { title: "No" }
              ],
              fields: [
                {
                  id: 'ubs_government_entity_status_question_4b1',
                  type: 'string',
                  title: 'Please indicate the names of any such investor:',
                  showCondition: {
                    type: 'EQUAL',
                    expressions: [
                      {
                          type: 'FORM_RESPONSE',
                          id: 'ubs_government_entity_status_question_4b'
                      },
                      {
                          type: 'CONST',
                          value: true
                      }
                    ]
                  }
                }
              ],
              showCondition: {
                type: 'EQUAL',
                expressions: [
                  {
                      type: 'FORM_RESPONSE',
                      id: 'signer_type_entity'
                  },
                  {
                      type: 'CONST',
                      value: true
                  }
                ]
              }
            },
            {
              id: 'info_5',
              type: 'info',
              title: 'Controlling Person Status',
              content: 'Please certify, by checking the appropriate box below, whether the Investor is or will be described in any of the following categories: (i) a person or entity that has discretionary authority or control with respect to the assets of the Partnership; (ii) a person or entity that provides investment advice for a fee (direct or indirect) with respect to the assets of the Partnership; or (iii) an “affiliate” of a person or entity described in clause (i) or (ii) above.  For purposes of this representation, an “affiliate” of a person or entity includes any person or entity controlling, controlled by or under common control with the person or entity, including by reason of having the power to exercise a controlling influence over the management or policies of the person or entity.',
              showCondition: {
                type: 'EQUAL',
                expressions: [
                  {
                      type: 'FORM_RESPONSE',
                      id: 'signer_type_entity'
                  },
                  {
                      type: 'CONST',
                      value: true
                  }
                ]
              }
            },
            {
              id: 'ubs_controlling_person_status_question_5',
              title: '',
              type: 'boolean',
              options: [
                { title: "Yes" },
                { title: "No" }
              ],
              showCondition: {
                type: 'EQUAL',
                expressions: [
                  {
                      type: 'FORM_RESPONSE',
                      id: 'signer_type_entity'
                  },
                  {
                      type: 'CONST',
                      value: true
                  }
                ]
              }
            },
          ]
        }
      ]
    }
  ],
  decorators: {
    ubs_investor_regulation_d_question_1: {
      hint: '* If the answer to the above question is “Yes”, please contact the Partnership immediately.'
    },
    ubs_investor_acknowledgement_question_2: {
      component: {
        type: 'radio'   // Override the default component type
      }
    }
  }
};
