export default {
  type: "object",
  properties: {
    street_address: {
      type: "string",
    },
    country: {
      enum: [
        "United States of America",
        "Canada",
        "United Kingdom",
        "France",
      ],
    },
  },
  allOf: [
    {
      if: {
        properties: { country: { const: "United States of America" } },
      },
      then: {
        properties: { zipcode: { type: "string" } },
      },
    },
    {
      if: {
        properties: { country: { const: "United Kingdom" } },
      },
      then: {
        properties: { postcode: { type: "string" } },
      },
    },
    {
      if: {
        properties: { country: { const: "France" } },
      },
      then: {
        properties: { telephone: { type: "string" } },
      },
    },
  ],
};
