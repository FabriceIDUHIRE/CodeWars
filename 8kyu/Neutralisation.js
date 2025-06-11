function neutralise(s1, s2) {
  let result = "";

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      result += s1[i]; // same characters remain the same
    } else {
      result += "0"; // different characters become neutral
    }
  }

  return result;
}


neutralise("+-+", "+--")     // ➞ "+-0"
neutralise("--++--", "++--++") // ➞ "000000"
neutralise("-+-+-+", "-+-+-+") // ➞ "-+-+-+"
neutralise("-++-", "-+-+")     // ➞ "-+00"
