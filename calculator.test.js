let calculator = require("./calculator");

test("sum test", () => {
    expect(calculator.add(1, 2)).toBe(3);
});
test("substract test", () => {
    expect(calculator.sub(5, 5)).toBe(0);
});
test("multiply test", () => {
    expect(calculator.multiply(-1, 3)).toBe(-3);
});
test("divide test", () => {
    expect(calculator.divide(10, 100)).toBe(0.1);
});
test("invalid operand", () => {
    expect(calculator.add("hh", 2)).toBe("One operand is invalid");
});
