const capitalize = require("./capitalize");

test("word should be capitalized", () => {
    expect(capitalize("hello")).toBe("Hello");
});
