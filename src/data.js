const pricingTables = [
  {
    id: 1,
    type: "basic",
    price: 29,
    features: [
      { name: "One Selected Template", included: true },
      { name: "100% Responsive Design", included: true },
      { name: "Credit Remove Permission", included: false },
      { name: "Lifetime Template Updates", included: false },
    ],
  },
  {
    id: 2,
    type: "premium",
    price: 59,
    features: [
      { name: "Five Existing Templates", included: true },
      { name: "100% Responsive Design", included: true },
      { name: "Credit Remove Permission", included: true },
      { name: "Lifetime Template Updates", included: false },
    ],
  },
  {
    id: 3,
    type: "ultimate",
    price: 99,
    features: [
      { name: "All Existing Templates", included: true },
      { name: "100% Responsive Design", included: true },
      { name: "Credit Remove Permission", included: true },
      { name: "Lifetime Template Updates", included: true },
    ],
  },
];

export { pricingTables };