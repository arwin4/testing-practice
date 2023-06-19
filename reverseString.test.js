import reverseString from './reverseString';

test('Is a string', () => {
  expect(typeof reverseString('test')).toBe('string');
});

test('Reverses string', () => {
  expect(reverseString('wow')).toBe('wow');
  expect(reverseString('woww')).toBe('wwow');
  expect(reverseString('')).toBe('');
  expect(reverseString('wo---aH')).toBe('Ha---ow');
  expect(reverseString('4321')).toBe('1234');
});
