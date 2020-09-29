//Setup "=="
function compareEquality1(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not equal";
}

console.log(compareEquality1(10, "10"))

//Setup "==="
function compareEquality2(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not equal";
}

console.log(compareEquality2(10, "10"))

// == Performs a type conversion
// === Compares strict