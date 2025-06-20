function ticker(text, width, tick) {
  const padded = ' '.repeat(width) + text + ' '.repeat(width);
  const start = tick % (text.length + width);
  return padded.slice(start, start + width);
}


console.log(ticker('Visit Rwanda', 10, 22));

