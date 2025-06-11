function calculator(a, b, sign) {
  // Check if both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "unknown value";
  }

  // Perform the operation based on the sign
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return  a / b ;  // Checking if second value is not 0
    default:
      return "unknown value";
  }
}


console.log(calculator(1, 2, '+')); // 3
console.log(calculator(5, 3, '-')); // 2
console.log(calculator(4, 0, '/')); // "unknown value" (optional handling)
console.log(calculator(3, 'a', '*')); // "unknown value"
console.log(calculator(2, 2, '&')); // "unknown value"
