//Example
var sum = 0;
function addThree() {
    sum = sum + 3;
}

console.log(addThree()); //Equals: undefined

function addFive() {
    sum += 5;
}

console.log(addFive()); //Equals: undefinded