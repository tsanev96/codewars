import { vowelOne } from "./02.vowelone";

describe("vowelOne", () => {
  it("Sample tests", () => {
    expect(vowelOne("vowelOne")).toStrictEqual("01010101");
    expect(vowelOne("123, arou")).toStrictEqual("000001011");
  });
});
