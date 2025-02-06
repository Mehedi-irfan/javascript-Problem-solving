function oddAverage(numbers) {
  let odds = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      odds.push(number);
    }
  }
  let sum = 0;
  for (const num of odds) {
    sum += num;
    const result = sum / odds.length;
    return `Odd Average value is :- ${result}`;
  }
}

const number = [20, 21, 8, 7, 9, 12, 14, 17];
const oddValue = oddAverage(number);
console.log(oddValue);
