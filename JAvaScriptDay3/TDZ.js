/* Scope:-


Global scope:- we access anywhere inside the current file */

let age = 23;
var name = "mohan";
const roll = "intern";


console.log("Global:", age, name, roll);


if (true) {

    console.log("age, name, roll");
}


function testScope() {
    console.log("Function:", age, name, roll);
}
testScope();


{
    console.log("Block:", age, name, roll);
}
/* ----------------------------------------------------------------------------------------------------------------------------------------- */

/* function scope:- only accesiable inside the function block */

function test() {
    let age = 40;
    var name = "david";
    const roll = "manager";
    console.log("Function:", age, name, roll);
}
test();

//console.log("Function:", age, name, roll); // reference error because of function scope we can not access outside the function

/* ----------------------------------------------------------------------------------------------------------------------------------------- */
//block scope:-

{
    let a = "moon"
    console.log(a);
}

console.log(a);//reference error