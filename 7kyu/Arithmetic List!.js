function seqlist(first, c, l) {
  const result = [];
  for (let i = 0; i < l; i++) {
    result.push(first + i * c);
  }
  return result;
}


seqlist(2, 3, 5)
