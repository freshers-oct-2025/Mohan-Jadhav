/* const http = require('http');


const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)

    res.writeHead(200, { "Content-Type": "text/html" });

    // Send HTML document
    res.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Node Server Page</title>
      <style>
        body { font-family: Arial; background-color: #f5f5f5; text-align: center; }
        h1 { color: #0078D7; }
        p { font-size: 18px; color: #333; }
      </style>
    </head>
    <body>
      <h1>Hello from Node.js Server</h1>
      <p>This is an HTML document sent from your backend!</p>
    </body>
    </html>
  `);

    res.end();
})

server.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});




 */





const http = require('http');

const server = http.createServer((req, res) => {
  // Step 1: Create some data in JavaScript
  const data = {
    name: "Mohan",
    course: "Node.js",
    message: "Hello from the server",
  };

  // Step 2: Convert data into JSON format
  const jsonData = JSON.stringify(data);

  // Step 3: Set header → tell browser that response is JSON
  res.writeHead(200, { "Content-Type": "application/json" });

  // Step 4: Send the JSON response
  res.end(jsonData);
});

server.listen(3006, () => {
  console.log("Server running on http://localhost:3006");
});
