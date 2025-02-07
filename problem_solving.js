function calculateTax(monthlyIncome, monthlyExpense) {
  if (
    monthlyIncome > monthlyExpense ||
    monthlyIncome < 0 ||
    monthlyExpense < 0
  ) {
    return "Invalid string";
  } else if (monthlyIncome == monthlyExpense) {
    return `Tax :- 0`;
  } else {
    const incomeTax = (monthlyIncome - monthlyExpense) * 0.2;
    return incomeTax;
  }
}
const tax = calculateTax(-7000, 2000);
console.log(tax);
