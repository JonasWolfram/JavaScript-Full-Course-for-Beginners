var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violine"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    },
    {
        "firstName": "Jonas",
        "lastName": "Wolfram",
        "number": "0555662128",
        "likes": ["Pizza", "Coding", "Corgis", "Techno"]
    }
];

function lookUpProfil(name, prop){
    for (var i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] || "No such property"
        }
    }
    return "No such contact"
};

//Change these values to test your function.
var data = lookUpProfil("Akira", "likes");

console.log(data);

var data1 = lookUpProfil("Harry", "number");

console.log(data1);

var data3 = lookUpProfil("Sirlock", "lastName");

console.log(data3);

var data4 = lookUpProfil("Sherlock", "likes");

console.log(data4);