//Example 1 
function orderMyLogic1(val) {
    if (val < 10) {
        return "Smaller than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic1(3));
//Does nnot work as expected, output is: "Smaller than 10" but it should be "Smaller than 5" [3]
//We need to change the logical order from down -> to -> up

function orderMyLogic2(val) {
    if (val < 5) {
        return "Smaller than 5";
    } else if (val < 10) {
        return "Smaller than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic2(3));