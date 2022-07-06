function checkValidOperand(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return false;
    } else {
        return true;
    }
};

function add(a, b) {
    if (checkValidOperand(a, b)) {
        return a + b;
    }
    return "One operand is invalid";
};
function sub(a, b) {
    if (checkValidOperand(a, b)) {
        return a - b;
    }
    return "One operand is invalid";
};
function multiply(a, b) {
    if (checkValidOperand(a, b)) {
        return a * b;
    }
    return "One operand is invalid";
};
function divide(a, b) {
    if (checkValidOperand(a, b)) {
        return a / b;
    }
    return "One operand is invalid";
};

let calculator = {
    add,
    sub,
    divide,
    multiply,
};
module.exports = calculator;