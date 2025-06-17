function triangular(n) {
  if (n <= 0) return 0;
  return n * (n + 1) / 2;
}


console.log(triangular(0));    // 0
console.log(triangular(2));    // 3
console.log(triangular(3));    // 6
console.log(triangular(-10));  // 0
console.log(triangular(5));    // 15
