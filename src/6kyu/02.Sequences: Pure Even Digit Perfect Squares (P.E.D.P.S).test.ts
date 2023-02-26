import { getEvenDigitSquares } from "./02.Sequences: Pure Even Digit Perfect Squares (P.E.D.P.S)";

describe("Test function for getting all even digit squares", function () {
  it("Simple Cases", function () {
    expect(getEvenDigitSquares(100, 1000)).toStrictEqual([400, 484]);
    expect(getEvenDigitSquares(1000, 4000)).toStrictEqual([]);
    expect(getEvenDigitSquares(10000, 40000)).toStrictEqual([
      26244, 28224, 40000,
    ]);
  });
});
