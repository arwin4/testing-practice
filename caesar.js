function caesarCipher(string, shift) {
  // prettier-ignore
  const lowercaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // prettier-ignore
  const uppercaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let shiftedString = '';

  for (let i = 0; i < string.length; i += 1) {
    let shiftedIndex;

    // Test for letter case, then use respective array of letters

    // Lowercase:
    if (string[i].toLowerCase() === string[i]) {
      shiftedIndex = lowercaseAlphabet.findIndex(
        (letter) => letter === string[i],
      );

      // If not a letter, just concatenate
      if (shiftedIndex === -1) {
        shiftedString += string[i];
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
