const catgories = ["fruits", "vegetables", "colors", "fruits", "food"];
const products = [
  { id: 1, name: "ABC", category: "fruits" },
  { id: 2, name: "ABC", category: "food" },
  { id: 3, name: "XYZ", category: "food" },
];
const mapping = {};

for (let item of catgories) {
  const matchingProducts = products.filter(
    (product) => product.category === item
  );
  if (!mapping.hasOwnProperty(item)) {
    mapping[item] = matchingProducts;
  }
}

console.log(mapping);
