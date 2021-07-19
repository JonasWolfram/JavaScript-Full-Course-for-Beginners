function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or more";
    }
    if (val >= 10) {
        return "10 or more";
    }
    return "Less than 10";
}

console.log(testGreaterOrEqual(15))
console.log(testGreaterOrEqual(45))
console.log(testGreaterOrEqual(5))