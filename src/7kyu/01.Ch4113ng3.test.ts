import { nerdify } from "./01.Ch4113ng3";

describe("nerdify", function () {
  it("Sample Tests", function () {
    expect(nerdify("Seven")).toStrictEqual("S3v3n");
    expect(nerdify("Los Angeles")).toStrictEqual("Los 4ng313s");
    expect(nerdify("Seoijselawuue")).toStrictEqual("S3oijs314wuu3");
    expect(nerdify("Fund4m3nt41s")).toStrictEqual("Fund4m3nt41s");
  });
});
