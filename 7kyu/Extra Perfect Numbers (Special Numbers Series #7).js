

function extraPerfect(n) {
  let result = [];
  for (let i = 1; i <= n; i += 2) {
    result.push(i);
  }
  return result;
}








console.log(extraPerfect(3)); // [1, 3]
console.log(extraPerfect(7)); // [1, 3, 5, 7]
