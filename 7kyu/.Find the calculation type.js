function calcType(a, b, res) {
  if (a + b === res) return "addition";
  if (a - b === res) return "subtraction";
  if (a * b === res) return "multiplication";
  if (a / b === res) return "division";
}





console.log(calcType(1, 2, 3));    // "addition"
console.log(calcType(5, 2, 2.5));  // "division"
console.log(calcType(10, 5, 5));   // "subtraction"
console.log(calcType(3, 4, 12));   // "multiplication"
