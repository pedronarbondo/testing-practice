let reverseString = require("./reverseString");

test("string should be reversed", () => {
    expect(reverseString("heeeyaaa")).toBe("aaayeeeh");
});

test("string should be reversed", () => {
    expect(reverseString("testing")).toBe("gnitset");
});

test("string should be reversed", () => {
    expect(reverseString("123456")).toBe("654321");
});

test("string should be reversed", () => {
    expect(reverseString("nextautomation")).toBe("noitamotuatxen");
});