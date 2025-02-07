function checkInputIsString(name) {
  if (/\d/.test(name)) {
    return true;
  } else if (typeof name !== "string") {
    return `invalid string`;
  } else {
    return false;
  }
}
const input = checkInputIsString("Name2024");
console.log(input);
