const fs = require("fs");

const data = fs.readFileSync("data.txt", "utf8"); // Blocking code 
console.log(data);
console.log("This line runs after file is read");
