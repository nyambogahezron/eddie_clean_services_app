const pricingTables = [
  {
    id: 1,
    type: "basic",
    price: 29,
    features: [
      { name: "Single Room Cleaning", included: true },
      { name: "100% Surface Sanitization", included: true },
      { name: "Specialized Stain Removal", included: false },
      { name: "Quarterly Deep Cleans", included: false },
    ],
  },
  {
    id: 2,
    type: "premium",
    price: 59,
    features: [
      { name: "Whole House Cleaning", included: true },
      { name: "100% Surface Sanitization", included: true },
      { name: "Specialized Stain Removal", included: true },
      { name: "Quarterly Deep Cleans", included: false },
    ],
  },
  {
    id: 3,
    type: "ultimate",
    price: 99,
    features: [
      { name: "Commercial Building Cleaning", included: true },
      { name: "100% Surface Sanitization", included: true },
      { name: "Specialized Stain Removal", included: true },
      { name: "Quarterly Deep Cleans", included: true },
    ],
  },
];

export { pricingTables };
