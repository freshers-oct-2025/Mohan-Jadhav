console.log("Start");

setTimeout(() => {
  console.log("Timer Done");
}, 2000);

Promise.resolve().then(() => {
  console.log("Promise Done");
});

console.log("End");
