/* Array: - array is a collection of heterregeneous type of data in JS,
    we store n number value / data in singal variable,
    we access array element based on index.
    Array is dynamic in size */
/* ------------------------------------------------------------------------------------------------------------------------------------- */

//Array creation 

//array creation using litral way
console.log("array creation using litral way")
let array = [1, 3, 4, 5, 6];
//access array Element based on index
console.log(array[3]);
console.log(array[0]);
console.log(array[4]);

console.log(array.length);//find length of array


/* ------------------------------------------------------------------------------------------------------------------------------------- */

//access array element using for loop
console.log("access array element using for loop")
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

/* ------------------------------------------------------------------------------------------------------------------------------------- */

//array creation using constructor way
console.log("array creation using constructor")
let arr1 = new Array(1, "mohan", 23);
console.log(arr1);

/* ------------------------------------------------------------------------------------------------------------------------------------- */

//built-in-methods in array
let arr2 = [1, 3, 4, 5, 6];

//1.push:- add element end of the array
arr2.push(7);
console.log(arr2);

//2.pop:-remove last element of array
arr2.pop();
console.log(arr2);

//3.sift :- remove start element of the array
arr2.shift();
console.log(arr2);

//4.unsift:-  add element at the starting point of the array
arr2.unshift(10)
console.log(arr2);

//5.slice:- print the part of the array
console.log(arr2.slice(2, 4))
console.log(arr2);

//6.splice :- change the containt of the array
arr2.splice(1, 2, "mohan");
console.log(arr2);

/* ------------------------------------------------------------------------------------------------------------------------------------- */
//map,filter and reduce

let arr3 = [1, 3, 4, 5, 6];

/* ............................................. */

//1.map:- create new array and applay some changes on each and every element of the array

//let mapans = arr.map((number) => number * number);

let mapans = arr3.map((number) => {
    return number * number;
})
console.log(mapans);

/* ............................................. */

//2.filter:- filtering the data/element of the array 
//let ans = arr.filter((number) => number % 2 == 0);

let filterans = arr3.filter((number) => {
    return number % 2 == 0;
});
console.log(filterans);

/* ............................................. */

//3.reduce:-Reduces an array to a single value
//let reduceans = arr3.reduce((acc, curr) => acc + curr, 0);
let reduceans = arr3.reduce((acc, curr) => {
    return acc + curr
}, 0);

console.log(reduceans);
/* ............................................. */

//sort:- used to sort the array element either in accending order or decending order

let arr4 = [1, 3, 49, 1, 75, 6];

///sort in asc order
arr4.sort((a, b) => a - b)
console.log(arr4)

// sort in desc order
arr4.sort((a, b) => b - a)
console.log(arr4)

/* ............................................. */
//indexof:- used to finf the index of the perticular element
console.log(arr4.indexOf(49));
console.log(arr4.lastIndexOf(1));

/* ............................................. */

//find :-returns the first element in an array that satisfies a given condition
const numbers = [3, 8, 12, 5, 20];
const result = numbers.find(num => num > 10);
console.log(result); // 12

/* ------------------------------------------------------------------------------------------------------------------------------------- */

//for-each :- itrate all element of the array
numbers.forEach((num) => {
    console.log(num);
})

/* ------------------------------------------------------------------------------------------------------------------------------------- */

//for-in :- itrate all element of the object
const person = { name: "Alice", age: 25, city: "Delhi" };

for (let key in person) {
    console.log(key, ":", person[key]);
}

/* ------------------------------------------------------------------------------------------------------------------------------------- */
//for of :- Used for: Arrays, Strings, Maps, Sets
const arr5 = [10, 20, 30];
for (let value of arr5) {
    console.log(value);
}


