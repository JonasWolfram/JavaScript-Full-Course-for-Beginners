var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
};

var zeus = new SpaceShuttle("Jupiter");

console.log(zeus.targetPlanet);

//Better way:
class SpaceShuttle2 {
    constructor(targetPlanet2){
        this.targetPlanet2 = targetPlanet2;
    }
}

var zeus = new SpaceShuttle2("Saturn");

console.log(zeus.targetPlanet2);

//Another example
function makeClass(){
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
};

const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name);
