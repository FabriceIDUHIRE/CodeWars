function convertMyDollars(usd, currency) {
  const rateRaw = CONVERSION_RATES[currency];
  if (rateRaw == null) {
    throw new Error("Unknown currency: " + currency);
  }

  // If the currency starts with a consonant, the rate is shown in binary.
  const firstChar = currency[0].toUpperCase();
  const isVowel = ['A', 'E', 'I', 'O', 'U'].includes(firstChar);
  const rate = isVowel
    ? rateRaw                  // Normal decimal rate
    : parseInt(rateRaw, 2);   // Convert binary string to decimal

  const converted = usd * rate;
  return `You now have ${converted} of ${currency}.`;
}


const CONVERSION_RATES = {
  "Japanese Yen": "1101111",  // binary for 111
  "Czech Koruna": "10101",    // binary for 21
  "Euro": 0.92,               // starts with vowel → decimal
  "Canadian Dollar": 1.25     // starts with consonant (C) → but assume rate is binary?
};
