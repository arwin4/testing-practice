function caesarCipher(string, shift) {
  // prettier-ignore
  let lowercaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // prettier-ignore
  let uppercaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // Extend the arrays to ensure the shifted value is inside the array's bounds
  while (
    shift + 26 > lowercaseAlphabet.length &&
    shift + 26 > uppercaseAlphabet.length
  ) {
    lowercaseAlphabet = lowercaseAlphabet.concat(lowercaseAlphabet);
    uppercaseAlphabet = uppercaseAlphabet.concat(uppercaseAlphabet);
  }

  let shiftedString = '';

  // Add the shifted letters to the string to be returned;
  for (let i = 0; i < string.length; i += 1) {
    let shiftedIndex;

    // Test for letter case, then use respective array of letters
    // Lowercase / not a letter:
    if (string[i].toLowerCase() === string[i]) {
      shiftedIndex = lowercaseAlphabet.findIndex(
        (letter) => letter === string[i],
      );

      // If the letter wasn't found, it's not a letter, so concatenate as-is
      if (shiftedIndex === -1) {
        shiftedString += string[i];
        // If a letter, shift and concatenate
      } else {
        shiftedString += lowercaseAlphabet[shiftedIndex + shift];
      }

      // Uppercase:
    } else {
      shiftedIndex = uppercaseAlphabet.findIndex(
        (letter) => letter === string[i],
      );
      shiftedString += uppercaseAlphabet[shiftedIndex + shift];
    }
  }

  return shiftedString;
}

export default caesarCipher;
