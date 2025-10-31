// how to array element in the ser

let arr = [1, 2, 5, 6, 4, 6, 7, 3, 2, 20];


//direct pass array name as a argumrnt
let s = new Set(arr);
console.log(s)

//using for loop
for (let i = 0; i < arr.length; i++) {
    s.add(arr[i]);
}
console.log(s);