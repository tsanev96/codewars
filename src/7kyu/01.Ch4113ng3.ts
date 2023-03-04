/*
Make your strings more nerdy:
Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"
*/

export const nerdify = (txt: string) => {
  const replacements = { a: "4", A: 4, e: "3", E: "3", l: "1" };
  return txt
    .split("")
    .map((letter) => replacements[letter] || letter)
    .join("");
};
