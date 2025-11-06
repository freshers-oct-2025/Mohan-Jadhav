const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => { // ⚡ Non-Blocking
  if (err) throw err;
  console.log(data);
});

console.log("This line runs first!");
