function accum(s) {
  return s
    .split('')                  // Step 1: Convert the string into an array of characters.
    .map((ch, i) =>             // Step 2: For each character `ch` and its index `i`:
      ch.toUpperCase() +        // - Make the first letter uppercase.
      ch.toLowerCase().repeat(i) // - Then repeat the lowercase version of `ch` `i` times.
    )
    .join('-');                 // Step 3: Join all the transformed strings with a dash (-).
}
