//for loop
//print all number 0 to n using for loop
let n1= prompt("enter the value of n")
for (let i = 0; i < n1; i++) {
    console.log(i);
}


/* ----------------------------------------------------------------------------------------------------------------- */
//while loop
//print all even no between 0 to n
let n2 = prompt("Enter the value of n:");
let j = 0;

while (j <= n2) {
    if (j % 2 == 0) {
        console.log(j);
    }
    j++;
}

/* ----------------------------------------------------------------------------------------------------------------- */
//do while loop
//print all odd no between 0 to n
let n3 = prompt("Enter the value of n:");
let k = 0;

do {
    if (k % 2 != 0) {
        console.log(k);
    }
    k++;
} while (k < n);


