//Setup
var collection = {
    "2548": {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it rock",
            "You give love a bad name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    },
};

//Keep a copy of the collection for test
var collectionCopy = JSON.parse(JSON.stringify(collection));

//Only change code below this line
function updateCollection(id, prop, value) {                        //Function Name -Object ID -Property -to be defined value
    if (value === "") {                                             //If value is empty = delete
        delete collection[id][prop];                                //delete 
    } else if (prop === "tracks") {                                 //prop equals "tracks"
        collection[id][prop] = collection[id][prop] || [];          //If property equals itself OR is empty
        collection[id][prop].push(value);                           //push the value
    } else {                                                        //else -if nothing change Object & Property is the value (?)
        collection[id][prop] = value;
    }

    return collection
}

//Alter values below to test your code
console.log(updateCollection(5439, "artist", "ABBA"));
console.log(updateCollection(2468, "tracks", "test"))