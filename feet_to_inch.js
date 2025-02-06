function feetToInch(feet) {
  const feetString = parseInt(feet / 12);
  const inchRemaining = feet % 12;
  return `${feetString} feet ${inchRemaining} inch;`;
}

const irfan = feetToInch(70);
console.log(irfan);
