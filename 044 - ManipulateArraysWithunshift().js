//Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
console.log(ourArray);
//ourArray now equals ["Happy", "J", "cat"]

//Setup
var myArray = [["John", 23],["dog", 3]];
myArray.shift();

//Only change code below this line.
myArray.unshift(["Paul", 35]);
console.log(myArray);