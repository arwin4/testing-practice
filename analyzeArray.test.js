import analyzeArray from './analyzeArray';

const exampleObject = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};

const emptyObject = {};

test('Average', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('average', 4);
  expect(analyzeArray([5, 10, 15])).toHaveProperty('average', 10);
  expect(analyzeArray([3, 6, 9, 12, 15])).toHaveProperty('average', 9);
  expect(analyzeArray([5])).toHaveProperty('average', 5);
  expect(analyzeArray([0])).toHaveProperty('average', 0);
});

test('Length', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('length', 6);
  expect(analyzeArray([5, 10, 15])).toHaveProperty('length', 3);
  expect(analyzeArray([3, 6, 9, 12, 15])).toHaveProperty('length', 5);
  expect(analyzeArray([5])).toHaveProperty('length', 1);
  expect(analyzeArray([0])).toHaveProperty('length', 1);
});

test('Min', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('min', 1);
  expect(analyzeArray([5, 10, 15])).toHaveProperty('min', 5);
  expect(analyzeArray([3, 6, 9, 12, 15])).toHaveProperty('min', 3);
  expect(analyzeArray([5])).toHaveProperty('min', 5);
  expect(analyzeArray([0])).toHaveProperty('min', 0);
  expect(analyzeArray([0, -24, 2, -15])).toHaveProperty('min', -24);
});

test('Max', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('max', 8);
  expect(analyzeArray([5, 10, 15])).toHaveProperty('max', 15);
  expect(analyzeArray([3, 6, 9, 12, 15])).toHaveProperty('max', 15);
  expect(analyzeArray([5])).toHaveProperty('max', 5);
  expect(analyzeArray([0])).toHaveProperty('max', 0);
  expect(analyzeArray([0, -24, 2, -15])).toHaveProperty('max', 2);
});

test('Example', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual(exampleObject);
});
