function shiftLeft(s, t) {
  let i = s.length - 1;
  let j = t.length - 1;
  let common = 0;

  // Start from end and count matching characters
  while (i >= 0 && j >= 0 && s[i] === t[j]) {
    common++;
    i--;
    j--;
  }

  // Total moves = remaining chars in s + remaining chars in t
  return (s.length - common) + (t.length - common);
}