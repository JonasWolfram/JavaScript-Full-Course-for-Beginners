//Var is declared globally or locally when inside a function
function checkScope() {
    "use strict";
        var i = "function scope";
        if (true) {
            i = "block scope";
            console.log("Block scope i is: ", i);               //Output: Block scope i is: Block scope
        }
        console.log("Function scope i is: ", i);                //Output: Block scope i is: Block scope
        return i;
}

checkScope();

//Let is limited to block/statement or expression it was declared to
function checkScope() {
    "use strict";
        let i = "function scope";
        if (true) {
            let i = "block scope";
            console.log("Block scope i is: ", i);               //Output: Block scope i is: Block scope
        }
        console.log("Function scope i is: ", i);                //Output: Block scope i is: Function scope
        return i; 
}

checkScope();

//Experiment (will create error)
function checkScope() {
    "use strict";
        // let i = "function scope";
        if (true) {
            let i = "block scope";
            console.log("Block scope i is: ", i);               //Output: Block scope i is: Block scope
        }
        console.log("Function scope i is: ", i);                //Output: Block scope i is: Function scope
        return i; 
}

checkScope();

//Run functions seperatly for predicted output