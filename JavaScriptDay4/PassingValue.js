
// passing the value
let x = 10;

function modify(n) {
    n = n + 5;
    console.log("inside function", n)
}

modify(x);
console.log("outside function", x);
/* ------------------------------------------------------------------------------------------- */

// passing the object 
let obj = {
    name: "mohan",
    age: 23,
    roll: "intern"
}

function updateage(obj) {
    obj.age = 30;
    console.log(obj.age)
}

updateage(obj);
console.log(obj.age);
/* ------------------------------------------------------------------------------------------- */
//passing the arrays
let arr = [2, 4, 5, 6, 8]

function updatearr(a) {
    a[0] = 23;
    console.log(a[0]);
}

updatearr(arr);
console.log(arr[0]);