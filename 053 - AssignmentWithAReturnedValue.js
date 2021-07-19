var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

console.log(changed); //Equals: 5 ( num (10) + 5 / 3 = 5 )

//////////

var pro = 0;

function proArg(num) {
    return (num + 3) / 5;
}

pro = proArg(7);

console.log(pro);
