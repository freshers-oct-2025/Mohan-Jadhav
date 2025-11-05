const fs = require("fs");

// Create a readable stream
const stream = fs.createReadStream("data.txt"); // suppose data.txt is a big file

// 'data' event gives data in CHUNKS
stream.on("data", chunk => {
  console.log("📦 New Chunk Received!");
  console.log("➡ Type:", typeof chunk);          // object
  console.log("➡ Is Buffer:", Buffer.isBuffer(chunk)); // true
  console.log("➡ Buffer Data:", chunk);          // raw binary data
  console.log("➡ Text Data:", chunk.toString()); // converted to string
  console.log("----------------------------------");
});

// 'end' event fires when file reading is complete
stream.on("end", () => {
  console.log("✅ File reading finished!");
}); 