const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        "use strict"
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

//Better way:
const bicycle2 = {
    gear: 2,
    setGear(newGear) {
        "use strict"
        this.gear = newGear;
    }
};

bicycle2.setGear(3);
console.log(bicycle2.gear);
