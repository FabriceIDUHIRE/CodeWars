function lettersToNumbers(s) {
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch >= 'a' && ch <= 'z') {
      // Lowercase: 'a' = 1, ..., 'z' = 26
      total += ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    } else if (ch >= 'A' && ch <= 'Z') {
      // Uppercase: 'A' = 2, ..., 'Z' = 52
      total += 2 * (ch.charCodeAt(0) - 'A'.charCodeAt(0) + 1);
    } else if (ch >= '0' && ch <= '9') {
      // Digits: '0' = 0, ..., '9' = 9
      total += parseInt(ch);
    }
    // All other characters contribute 0, so we skip them
  }

  return total;
}


console.log(lettersToNumbers("aB3@Z")); // a=1, B=4, 3=3, @=0, Z=52 → total = 1+4+3+52 = 60
