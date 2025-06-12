function heron(a, b, c) {
  const s = (a + b + c) / 2; // semi-perimeter
  return Math.sqrt(s * (s - a) * (s - b) * (s - c)); // Heron's formula
}


console.log(heron(3, 4, 5)); // 6
console.log(heron(7, 8, 9)); // ~26.83
