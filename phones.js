const phones = [
  { name: "samsung", price: 120000, color: "black", camera: "12mp" },
  { name: "iphone", price: 198000, color: "silver", camera: "8mp" },
  { name: "xiaomi", price: 25000, color: "purple", camera: "108mp" },
  { name: "Huwei", price: 49000, color: "green", camera: "48mp" },
  { name: "Oneplus", price: 65000, color: "blue", camera: "78mp" },
  { name: "vivo", price: 12000, color: "red", camera: "32mp" },
];

function cheapestPhone(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}

const phone = cheapestPhone(phones);
console.log(phone);
