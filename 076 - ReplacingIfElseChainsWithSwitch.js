function chainToSwitch1(val) {
    var answer = "";
    //Only change code below this line
    if (val === "Bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The Answer";
    } else if (val === 1) {
        answer = "There is no #1";
    } else if (val === 99) {
        answer = "Missed my by this much!"
    } else if (val === 7) {
        answer = "Ate night";
    }
    return answer;
}

console.log(chainToSwitch1(99));

//Replacing If Else
function chainToSwitch2(val) {
    var answer = "";
    //Only change code below this line
    switch(val) {
        case "Bob": 
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed my by this much!"
            break;
        case 7:
            answer = "Ate night";
            break;
    }
    return answer;
}

console.log(chainToSwitch1("Bob"))
console.log(chainToSwitch2(42));