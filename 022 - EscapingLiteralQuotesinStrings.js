var myStr = "I am a "double quoted" string inside "double quotes"";

//This won't work because JS will see the second " as the endpoint. 
//To "escape" this, you can use an "\" (Backslash) to mark the "" as Quotes

var myStr2 = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr2)