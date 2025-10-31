
// async function creation
async function printname() {
    setTimeout(function () {
        console.log("my name is Mohan")
    }, 3000)
}
printname();//function call


//async and await
async function getUserData() {
    console.log("Fetching data...");


    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User data received!");
        }, 2000);
    });


    let result = await promise;

    console.log(result);
    console.log("Task completed!");
}

getUserData();
