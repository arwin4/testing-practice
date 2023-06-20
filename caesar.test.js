import caesarCipher from './caesar';

test('Is a string', () => {
  expect(typeof caesarCipher('word', 1)).toBe('string');
});

test('1 letter string, 1 shift', () => {
  expect(caesarCipher('a', 1)).toBe('b');
  expect(caesarCipher('b', 1)).toBe('c');
});

test('1 letter string, >1 shift', () => {
  expect(caesarCipher('a', 2)).toBe('c');
  expect(caesarCipher('b', 2)).toBe('d');
  expect(caesarCipher('b', 3)).toBe('e');
});

test('z, multiple shifts', () => {
  expect(caesarCipher('z', 1)).toBe('a');
  expect(caesarCipher('z', 2)).toBe('b');
  expect(caesarCipher('z', 3)).toBe('c');
  expect(caesarCipher('z', 25)).toBe('y');
});

test('y, multiple shifts', () => {
  expect(caesarCipher('y', 2)).toBe('a');
  expect(caesarCipher('y', 3)).toBe('b');
  expect(caesarCipher('y', 4)).toBe('c');
  expect(caesarCipher('y', 25)).toBe('x');
});

test('Large shift number', () => {
  expect(caesarCipher('y', 52)).toBe('y');
});

test('two letter words, multiple shifts', () => {
  expect(caesarCipher('ab', 1)).toBe('bc');
  expect(caesarCipher('bc', 1)).toBe('cd');
  expect(caesarCipher('ab', 2)).toBe('cd');
  expect(caesarCipher('bc', 2)).toBe('de');
  expect(caesarCipher('yz', 1)).toBe('za');
  expect(caesarCipher('yz', 2)).toBe('ab');
});

test('Uppercase', () => {
  expect(caesarCipher('Z', 1)).toBe('A');
  expect(caesarCipher('Z', 2)).toBe('B');
  expect(caesarCipher('Z', 3)).toBe('C');
  expect(caesarCipher('ZB', 1)).toBe('AC');
  expect(caesarCipher('zbZB', 1)).toBe('acAC');
  expect(caesarCipher('zbZB', 2)).toBe('bdBD');
});

test('attackatonce', () => {
  expect(caesarCipher('attackatonce', 1)).toBe('buubdlbupodf');
  expect(caesarCipher('attackatonce', 2)).toBe('cvvcemcvqpeg');
});

test('Ignores punctuation', () => {
  expect(caesarCipher('attack at once', 1)).toBe('buubdl bu podf');
  expect(caesarCipher('attack, at once!', 1)).toBe('buubdl, bu podf!');
  expect(caesarCipher('attack at once', 2)).toBe('cvvcem cv qpeg');
});
