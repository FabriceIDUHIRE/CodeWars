function magicSum(numbers) {
  let sum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    
    // Check if it's odd
    if (number % 2 !== 0) {
      // Check if it contains the digit 3
      if (number.toString().includes('3')) {
        sum += number;  // Add it to the sum
      }
    }
  }

  return sum;
}




console.log(magicSum([3, 12, 5, 8, 30, 13])); // 16
console.log(magicSum([1, 2, 3, 4, 5]));       // 3
console.log(magicSum([31, 33, 36, 38]));      // 64 (31 + 33)
console.log(magicSum([2, 4, 6, 8]));          // 0
