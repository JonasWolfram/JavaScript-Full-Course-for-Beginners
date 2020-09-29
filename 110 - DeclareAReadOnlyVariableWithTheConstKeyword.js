//with var
function printManyTimes(str) {
    "use strict";

    var sentence = str + " is cool!";

    sentence = str + " is amazing!";

    for(var i = 0; i < str.length; i += 2) {
        console.log(sentence);                          //Output: freeCodeCamp is amazing! (6x)
    }
}

printManyTimes("freeCodeCamp");

//with const
function printManyTimes(str) {
    "use strict";

    const sentence = str + " is cool!";

    sentence = str + " is amazing!";

    for(var i = 0; i < str.length; i += 2) {
        console.log(sentence);                          //Error - you can't reasign a const
    }
}

printManyTimes("freeCodeCamp");

//When using const it is very common to use only capital letters
function printManyTimes(str) {
    "use strict";

    var SENTENCE = str + " is cool!";

    for(let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);                          //Output: freeCodeCamp is cool! (6x)
    }
}

printManyTimes("freeCodeCamp");