//callback
function greet(name) {
    console.log("Hello, " + name);
}

function sayHello(callback) {
    let userName = "Mohan";
    callback(userName);
}

sayHello(greet);


//higher order function
function higherOrder(fn) {
    console.log("Inside higher order function");
    fn();
}

function sayHi() {
    console.log("Hi from callback!");
}

higherOrder(sayHi);
