const products = [
  { name: "shirt", price: 1200, quantity: 5 },
  { name: "pant", price: 2200, quantity: 6 },
  { name: "t-shirt", price: 800, quantity: 8 },
  { name: "shoes", price: 12000, quantity: 10 },
];

function productsPrice(products) {
  let totalPrice = 0;
  for (const product of products) {
    totalPrice += product.price * product.quantity;
  }
  return totalPrice;
}
const totalPrice = productsPrice(products);
console.log(totalPrice);
