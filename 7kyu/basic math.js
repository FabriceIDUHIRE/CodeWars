function calculate(str) {
  // Replace 'plus' with '+' and 'minus' with '-'
  const expression = str.replace(/plus/g, '+').replace(/minus/g, '-');
  
  // Evaluate the result
  const result = eval(expression);
  
  // Return result as a string
  return result.toString();
}


calculate("1plus2plus3plus4"); 
calculate("1plus2plus3minus4");
