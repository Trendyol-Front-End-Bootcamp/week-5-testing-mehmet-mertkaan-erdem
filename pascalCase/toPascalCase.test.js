const toPascalCase = require("./toPascalCase.js");

describe("check toPascalCase function", () => {
  it("should return uppercase first chars ", () => {
    expect(toPascalCase("this is title")).toBe("This Is Title");
  });

  it("should return empty string ", () => {
    expect(toPascalCase("")).toBe("");
  });

  it("should not make pascal case when word is 'and' and 'or'", () => {
    const sentence = "to be or not to be";

    const pascalTitle = toPascalCase(sentence);

    expect(pascalTitle).toBe("To Be or Not To Be");
  });
});
