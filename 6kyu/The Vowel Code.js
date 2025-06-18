function encode(string) {
  return string.replace(/[aeiou]/g, char => {
    const map = { a: '1', e: '2', i: '3', o: '4', u: '5' };
    return map[char];
  });
}

function decode(string) {
  return string.replace(/[1-5]/g, num => {
    const map = { '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' };
    return map[num];
  });
}


console.log(encode("hello"));       // "h2ll4"
console.log(decode("h3 th2r2"));    // "hi there"
