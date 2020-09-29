function checkSign(num) {
    return num > 0 ? "positiv" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(10));
console.log(checkSign(-10));
console.log(checkSign(0));