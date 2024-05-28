import Product from "./models/Products";

const products: Product[] = [
  { name: "skittles", price: 5 },
  { name: "toblerone", price: 4 },
  { name: "kitkat", price: 2 },
  { name: "M&M", price: 3 },
];

const calculateAverageProductPrice = (arrayOfProducts: Product[]): number => {
  let total = 0;
  arrayOfProducts.forEach((product) => {
    total = total + product.price;
  });
  let avgPrice: number = total / arrayOfProducts.length;
  return arrayOfProducts.length === 0 ? 0 : avgPrice;
};

export { products, calculateAverageProductPrice };
