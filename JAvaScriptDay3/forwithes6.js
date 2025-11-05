
//normal for loop
console.log("for loop");
let n = prompt("enter the value of the n");
for (let i = 0; i < n; i++) {
    console.log(i);
}
/* ------------------------------------------------------------------------------- */
// break
console.log("break");
for (let i = 0; i < n; i++) {
    if (i == 3) {
        break; // stops the loop completely when i = 3
    } else {
        console.log(i);
    }
}
/* ------------------------------------------------------------------------------- */

//continue;
console.log("continue");
for (let i = 0; i < n; i++) {
    if (i == 3) {
        continue;// skip current iteration
    } else {
        console.log(i);
    }
}
/* ------------------------------------------------------------------------------- */

// for in :- used with object 
console.log("for in")
let obj = {
    a: 1,
    b: 2,
    c: 3
};
for (let key in obj) {
    console.log(key, obj[key]);
}
/* ------------------------------------------------------------------------------- */

//for of :-Used with(array, string, map, set).
console.log("for of")
let arr = [10, 20, 30];

for (let value of arr) {
    console.log(value);
}
/* ------------------------------------------------------------------------------- */

