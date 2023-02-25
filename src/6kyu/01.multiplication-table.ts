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
