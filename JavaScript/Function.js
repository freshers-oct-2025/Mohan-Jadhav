/* Named Function */
function f() {
    console.log("hello world");

}

f()


/* Function Expression:- we store a function inside a variable. */

let a = function f() {
    console.log("hello world");

}
a()


//Anonymous function:- the function without name is called Anonymous function

let mark = function () {
    console.log(97);
}
mark();


//arrow function:- simple and cleaner way to create function

let subject = () => {
    console.log("computer science");
}
subject();

let add = (a, b) => { console.log(a + b); }
add(34, 67);

//immediate invoke function Immediately Invoked Function Expression (IIFE) calls itself automatically there is no need to explicitly call
(function () {
    console.log("my name is Mohan")
})();


//neated function :- function created inside another function is called as nested function
function outerFunction() {
    function innerFunction() {
        console.log("Hello from inner function");
    }

    console.log("Hello from outer function");
    innerFunction(); // call inner function inside outer
}

outerFunction();


