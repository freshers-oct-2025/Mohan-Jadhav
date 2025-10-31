/* 
let firstpromise = new Promise((resolve, reject) => {
    setTimeout(function myname() {
        console.log("my name is mohan");
    }, 10000)
    return 1;
})

 */

let firstpromise = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve("promise fullfill");
    } else {
        reject("promise reject");
    }
});

firstpromise
    .then((result) => console.log(45+6))   
    .catch((error) => console.log(23));   

console.log(firstpromise);

