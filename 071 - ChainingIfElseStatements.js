/*
Write chained if/else if statements to fullfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else (num >= 20) //Condition is not necessary because it is everything not less than 20 is huge 
        return "Huge";
}

console.log(testSize(1));
console.log(testSize(7));
console.log(testSize(9));
console.log(testSize(11));
console.log(testSize(15));
console.log(testSize(17));
console.log(testSize(20));
console.log(testSize(30));