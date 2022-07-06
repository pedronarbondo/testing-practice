function findAverage(array) {
    let oneNum = array.reduce((previousValue, currentValue) => 
    previousValue + currentValue, 0);
    let amountOfNums = array.length;
    
    return oneNum/amountOfNums;
}

function findMin(array) {
    return array.sort(function(a,b) {
        return a-b;
    })[0];
}

function findMax(array) {
    return array.sort(function(a,b) {
        return a-b;
    })[array.length-1];
}

function findLength(array) {
    return array.length
}

function analyzeArray(array) {
    const object = {
        average: findAverage(array),
        min: findMin(array),
        max: findMax(array),
        length: findLength(array),
    }
    return object;
}
module.exports = analyzeArray;