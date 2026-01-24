// ===============================
// JavaScript Array Methods Practice
// ===============================

const products = [
  { id: 1, name: 'Laptop', price: 1200, category: 'electronics' },
  { id: 2, name: 'Phone', price: 800, category: 'electronics' },
  { id: 3, name: 'Shirt', price: 40, category: 'clothing' },
  { id: 4, name: 'Shoes', price: 100, category: 'clothing' },
  { id: 5, name: 'Book', price: 20, category: 'education' },
  { id: 6, name: 'Monitor', price: 300, category: 'electronics' },
  { id: 7, name: 'Pen', price: 5, category: 'education' },
];

// --------------------------------
// 1. New array based on original
// --------------------------------

// TODO: Use .slice() to copy the first 3 products into a new array.
const istProduct = products.slice(0, 3);
console.log(istProduct);
// TODO: Use .map() to create a new array of just product names.
const productName = products.map((product) => {
  return product.name;
});
console.log(productName);

// TODO: Use .filter() to get all products under $100.
const hundredProduct = products.filter((product) => {
  return product.price <= 100;
});
console.log(hundredProduct);

const categories = [['electronics', 'clothing'], ['education']];
// TODO: Use .flat() on categories.
console.log(categories.flat());

// TODO: Use .flatMap() to return a list of product names, each repeated twice.
const repeatedProductNames = products.flatMap((product) => [
  product.name,
  product.name,
]);

console.log(repeatedProductNames);

// --------------------------------
// 2. Looping arrays
// --------------------------------

// TODO: Use .forEach() to log each product name with its price.
products.forEach((product) => {
  console.log(`${product.name}  price is ${product.price}`);
});
// --------------------------------
// 3. Transform an array into a single value
// --------------------------------

// TODO: Use .reduce() to calculate the total value of all products.
let initialValue = 0;
const totalValue = products.reduce((acc, curr) => {
  return acc + curr.price;
}, initialValue);
console.log(totalValue);

// --------------------------------
// 4. Check if array includes something
// --------------------------------

// TODO: Use .includes() on an array of categories to check if "clothing" exists.
const checkCategory = categories.flat().includes('clothing');
console.log(checkCategory);

// TODO: Use .some() to check if there’s a product cheaper than $10.
const isCheaper = products.some((product) => product.price < 10);
console.log(isCheaper);
// TODO: Use .every() to check if every product has a price greater than 0.
const isGreater = products.some((product) => product.price > 0);
console.log(isGreater);
// TODO: Use .join() to join all product names into a single string separated by commas.
const joinString = productName.join(',');
console.log(joinString);

// --------------------------------
// 5. Array index methods
// --------------------------------

// TODO: Use .indexOf() to find the index of "Book" in a simple array of names.
const indexBook = productName.indexOf('Book');
console.log(indexBook);

// TODO: Use .findIndex() to find the index of the first product in "clothing".
const firstProduct = products.findIndex(
  (product) => product.category === 'clothing'
);
console.log(firstProduct);

// TODO: Use .findLastIndex() to find the last product in "electronics".
const lastProducts = products.findLastIndex(
  (product) => product.category === 'electronics'
);
console.log(lastProducts);

// TODO: Use .at() to get the last product in the array.
const lastProduct = products.at(-1);
console.log(lastProduct);
// TODO: Use .find() to get the first product in "education".
const istEducation = products.find(
  (product) => product.category === 'education'
);
console.log(istEducation);

// TODO: Use .findLast() to get the last product under $500. ds
const lastPrice = products.findLast((product) => product.price < 500);
console.log(lastPrice);
