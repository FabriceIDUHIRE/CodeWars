function solution(value) {
  return "Value is " + value.toString().padStart(5, '0');
}



console.log(solution(5));      // "Value is 00005"
console.log(solution(123));    // "Value is 00123"
console.log(solution(99999));  // "Value is 99999"
console.log(solution(0));      // "Value is 00000"
