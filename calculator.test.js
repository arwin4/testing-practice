import calculator from './calculator';

// Add
test('Expect a number', () => {
  expect(typeof calculator.add(1, 3)).toBe('number');
});

test('Expect correct addition', () => {
  expect(calculator.add(0, 0)).toBe(0);
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.add(2, 4)).toBe(6);
  expect(calculator.add(-40, -3)).toBe(-43);
  expect(calculator.add(3.3, 2.1)).toBe(5.4);
});
