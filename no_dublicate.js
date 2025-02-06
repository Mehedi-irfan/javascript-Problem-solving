function noDuplicate(value) {
  let unique = [];
  for (const val of value) {
    if (unique.includes(val) === false) {
      unique.push(val);
    }
  }
  return `Unique Value :- ${unique}`;
}
const arr = [4, 6, 8, 10, 8, 6, 4, 78, 10, 11, 6, 58, 69, 8];
const result = noDuplicate(arr);
console.log(result);
