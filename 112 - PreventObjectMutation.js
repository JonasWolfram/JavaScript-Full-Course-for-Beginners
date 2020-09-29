function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);              //This operator will prevent the code from changing to 99. 

    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    } 
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);