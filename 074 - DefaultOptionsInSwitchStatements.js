function switchOfStuff(val) {
    var answer = ""
    switch(val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff"
            break;
    }
    return answer;
}

//Change this value to test
console.log(switchOfStuff(2));

//If any of the switch - cases isn't fullfilled, the default will be displayed.