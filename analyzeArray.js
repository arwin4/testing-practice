function analyzeArray(array) {
  // Min
  const min = Math.min(...array);

  // Max
  const max = Math.max(...array);

  // Length
  const { length } = array;

  // Average
  const sum = array.reduce((acc, cur) => acc + cur);
  const average = sum / length;

  return { average, length, min, max };
}

export default analyzeArray;
