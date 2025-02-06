function layerDiscount(quantity) {
  const first100Price = 100;
  const second100Price = 70;
  const above200Price = 50;

  if (quantity <= 100) {
    const total = quantity * first100Price;
    return total;
  } else if (quantity <= 200) {
    const first100Total = 100 * first100Price;
    const remainingQuantity = quantity - 100;
    const remainingQuantityPrice = remainingQuantity * second100Price;
    const total = first100Total + remainingQuantityPrice;
    return total;
  } else {
    const first100Total = 100 * first100Price;
    const second100Total = 100 * second100Price;
    const remainingQuantity = quantity - 200;
    const remainingQuantityPrice = remainingQuantity * above200Price;
    const total = first100Total + second100Total + remainingQuantityPrice;
    return total;
  }
}

const totalPrice = layerDiscount(290);
console.log(totalPrice);
