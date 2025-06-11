function validateHello(greetings) {
  const greetingsList = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
  const lowerCaseInput = greetings.toLowerCase();

  for (let greet of greetingsList) {
    if (lowerCaseInput.includes(greet)) {
      return true;
    }
  }
  return false;
}


console.log(validateHello("Well, Hallo there!"));  // true
console.log(validateHello("hey, czesc!"));         // true
console.log(validateHello("good morning"));        // false
