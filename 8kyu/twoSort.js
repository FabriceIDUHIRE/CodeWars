function twoSort(s) {
  // Sort the array alphabetically (case-sensitive, ASCII order)
  s.sort();
  
  // Take the first string and add '***' between each character
  return s[0].split('').join('***');
}
console.log(twoSort(["Fabrice", "kigali", "kenya", "Tesla"]));