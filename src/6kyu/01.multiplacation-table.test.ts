import { multiplicationTable } from "./01.multiplacation-table";
describe("Testing multiplication table function", () => {
  it("should strict equal matrix arr", () => {
    expect(multiplicationTable(1)).toStrictEqual([[1]]);
    expect(multiplicationTable(2)).toStrictEqual([
      [1, 2],
      [2, 4],
    ]);
    expect(multiplicationTable(3)).toStrictEqual([
      [1, 2, 3],
      [2, 4, 6],
      [3, 6, 9],
    ]);
  });
});
