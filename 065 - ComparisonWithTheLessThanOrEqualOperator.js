function testLesOrEqual(val) {
    if (val <= 12) {
        return "Smaller or Equal than 12";
    }
    if (val <= 24) {
        return "Smaller or Equal than 24";
    }
    return "More than 24";
}

console.log(testLesOrEqual(10))