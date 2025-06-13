function productArray(numbers) {
  const totalProduct = numbers.reduce((prod, num) => prod * num, 1);
  return numbers.map(num => totalProduct / num);
}


console.log(productArray([12, 20]));       // [20, 12]
console.log(productArray([1, 5, 2]));      // [10, 2, 5]
console.log(productArray([10, 3, 5, 6, 2])); // [180, 600, 360, 300, 900]
