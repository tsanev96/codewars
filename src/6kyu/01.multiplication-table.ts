/*

Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]

*/

const calculateAritmeticalProgression = (
  startNumber: number,
  step: number,
  length: number
) => {
  const aritmeticalProgression: number[] = [];
  let sum = startNumber;
  for (let i = 0; i < length; i++) {
    aritmeticalProgression.push(sum);
    sum = sum + step;
  }
  return aritmeticalProgression;
};

export const multiplicationTable = (size: number) =>
  [...Array(size)].map((_row, rowIndex) =>
    calculateAritmeticalProgression(rowIndex + 1, rowIndex + 1, size)
  );
