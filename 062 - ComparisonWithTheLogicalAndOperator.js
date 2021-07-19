function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100"
    }
    if (val > 10) {
        return "Over 10, less than 100"
    }
    return "10 or less"
}

console.log(testGreaterThan(10))