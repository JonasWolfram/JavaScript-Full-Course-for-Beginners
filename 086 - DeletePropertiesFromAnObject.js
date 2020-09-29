//Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everyting!"]
};

delete ourDog.bark;

//Setup
var myDog = {
    "name": "Mitzy",
    "legs": 4,
    "tails": 1,
    "friends": ["Everyone !!!"]
};

//Only change code below this line
delete myDog.tails;
console.log(myDog);