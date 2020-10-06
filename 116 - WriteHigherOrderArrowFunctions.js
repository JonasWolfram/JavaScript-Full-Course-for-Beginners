const increment = (function() {
    return (number, value = 1) => number + value;
})();
console.log(increment(5, 2));
console.log(increment(5));

/*
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
*/