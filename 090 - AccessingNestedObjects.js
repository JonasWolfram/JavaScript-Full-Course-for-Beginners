//Setup
var myStorage = {
    "car": {
        "inside": {
            "glover box": "maps",
            "passenger seat": "crumbs"
        },
    },
        "outside": {
            "trunk": "jack"
    },
};

var gloverBoxContent = myStorage.car.inside["glover box"];

console.log(gloverBoxContent);