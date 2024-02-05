const categories = [
  {
    id: 1,
    name: "Electronics",
    subCategories: [2],
    level: 1,
  },
  { id: 2, name: "Phone", subCategories: [3, 4], level: 2 },
  {
    id: 3,
    name: "Sumsongs",
    subCategories: [],
    level: 3,
  },
  {
    id: 4,
    name: "Iphones",
    subCategories: [],
    level: 3,
  },
  {
    id: 5,
    name: "Clothes",
    subCategories: [6, 7],
    level: 1,
  },
  {
    id: 6,
    name: "Men Clothes",
    subCategories: [],
    level: 2,
  },
  {
    id: 7,
    name: "Women Clothes",
    subCategories: [123],
    level: 2,
  },
];

function poplulateSubCategories(categories) {
  const populate = (category) => {
    category.subCategories = category.subCategories
      .map((id) => {
        const subcategory = categories.find((category) => category.id === id);
        return subcategory && populate(subcategory);
      })
      .filter(Boolean);
    return category;
  };
  return categories.filter((category) => category.level === 1).map(populate);
}

console.dir(poplulateSubCategories(categories), { depth: null });
