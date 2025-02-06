function totalWood(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const totalChairWood = chairQuantity * perChairWood;
  const totalTableWood = tableQuantity * perTableWood;
  const totalBedWood = bedQuantity * perBedWood;

  const totalWoodNeed = totalChairWood + totalTableWood + totalBedWood;

  return totalWoodNeed;
}

const wood = totalWood(6, 1, 2);
console.log(wood);
