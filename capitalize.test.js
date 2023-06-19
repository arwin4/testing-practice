import capitalize from './capitalize';

test('Is a string', () => {
  expect(typeof capitalize('test')).toBe('string');
});

test('First character is a capital letter', () => {
  expect(capitalize('beST')).toBe('BeST');
  expect(capitalize('test')).toBe('Test');
  expect(capitalize('grapperHAUS')).toBe('GrapperHAUS');
  expect(capitalize('GrapperHAUS')).toBe('GrapperHAUS');
});
