function reverseString(string) {
  let reversed = '';
  for (let i = string.length; i >= 0; i -= 1) {
    reversed += string.charAt(i);
  }
  return reversed;
}

export default reverseString;
