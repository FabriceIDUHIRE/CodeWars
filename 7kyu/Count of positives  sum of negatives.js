function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];

  let count = 0;
  let sum = 0;

  for (let num of input) {
    if (num > 0) {
      count++;
    } else if (num < 0) {
      sum += num;
    }
    // 0 is ignored
  }

  return [count, sum];
}


console.log(
  countPositivesSumNegatives([1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15])
); // ➞ [10, -65]
