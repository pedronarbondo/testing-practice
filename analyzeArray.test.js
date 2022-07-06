let analyzeArray = require("./analyzeArray");

test("test array properties", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual(
        object = {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
    )
});

test("test array properties", () => {
    expect(analyzeArray([0,2,4,6,8,10])).toStrictEqual(
        object = {
            average: 5,
            min: 0,
            max: 10,
            length: 6
        }
    )
});
test("test array properties", () => {
    expect(analyzeArray([-1,-2,-3,-4,-5,-6])).toStrictEqual(
        object = {
            average: -3.5,
            min: -6,
            max: -1,
            length: 6
        }
    )
});

