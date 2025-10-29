//for loop
//print all number 0 to n using for loop
/* let n = prompt("enter the value of n")
for (let i = 0; i < n; i++) {
    console.log(i);
}
 */

/* ----------------------------------------------------------------------------------------------------------------- */
//while loop
//print all even no between 0 to n
/* let n = prompt("Enter the value of n:");
let i = 0;

while (i <= n) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
} */

/* ----------------------------------------------------------------------------------------------------------------- */
//do while loop
//print all odd no between 0 to n
let n = prompt("Enter the value of n:");
let i = 0;

do {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++;
} while (i < n);


