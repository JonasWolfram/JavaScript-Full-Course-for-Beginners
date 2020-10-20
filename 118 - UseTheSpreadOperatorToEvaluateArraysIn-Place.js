//Without Spread Operator
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function() {
    arr2 = arr1;
    arr1[0] = "potato";
})();
console.log(arr2);

//With Spread Operator
const arr3 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr4;
(function() {
    arr4 = [...arr3];
    arr3[0] = "potato";
})();
console.log(arr4);