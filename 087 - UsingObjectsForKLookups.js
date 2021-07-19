//Setup
var result = "";

//Setup
function phoneticLookSetup(val) {
switch(val) {
    case "alpha":
        result = "Adams";
        break;
    case "bravo":
        result = "Boston";
        break;
    case "charlie":
        result = "Chicago";
        break;
    case "delta":
        result = "Denver";
        break;
    case "echo":
        result = "Easy";
        break;
    case "foxtrot":
        result = "Frank";
        break;
    }
};

function phoneticLookup(val) {
var result = "";

//Only change code below this line

var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
    }
    result = lookup[val];
    //Only change code above this line
    return result;
};

console.log(phoneticLookup("delta"));
 