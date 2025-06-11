function duckDuckGoose(players, goose) {
  const index = (goose - 1) % players.length;
  return players[index].name;
}

// Example usage:
const players = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Charlie" }
];

console.log(duckDuckGoose(players, 1)); // "Alice"
console.log(duckDuckGoose(players, 4)); // "Alice"
console.log(duckDuckGoose(players, 5)); // "Bob"