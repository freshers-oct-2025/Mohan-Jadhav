/* variable is a named block of memory it is used to store DataTransfer.
we create variable using three keyword such as let var and const 
the scope of the var is function we access this variable only within a function 
redeclaration and reinitilization possible in var */

var name = "mohan";
console.log(name);

function solve(){
    var age=30;
    console.log(name)//mohan
    console.log(age);// output 30
}
//console.log(age);// reference error because var is function scope

solve();//function calling 

/* ------------------------------------------------------------------------------------------------------ */

let age=50
console.log(age)//output 50

/* reinitilization */
age=40
console.log(age)//output 40


//redeclaration
/* let age=45
console.log(age)// syntax error  */


{
    let a="sai";
    console.log(age)//40
}

//console.log(a);//reference error because let is block scope

function demo(){
    let b=67
    console.log(b);
}
//console.log(b);//reference error
demo()

/* ------------------------------------------------------------------------------------------------------ */

const colour="red"
console.log(colour);

/* colour="blue"// type error because in const reinnitilization is not possible 
console.log(colour); */

/* const colour="green"
console.log(colour);// syntax error beause in const redeclaration is not possible
 */

/* -------------------------------------------------------------------------------------------=----------------*/
/* var → Function-scoped, can redeclare and reinitialize.
let → Block-scoped, can reinitialize but not redeclare.
const → Block-scoped, neither redeclare nor reinitialize. */