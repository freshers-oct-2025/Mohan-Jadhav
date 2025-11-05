const http = require("http");

const server = http.createServer((req, res) => {
  // Set Content-Type header to HTML
  res.writeHead(200, { "Content-Type": "text/html" });

  // Send HTML form as response
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Form Example</title>
      </head>
      <body style="font-family: sans-serif; text-align: center; margin-top: 50px;">
        <h2>Simple Form</h2>
        <form action="/submit" method="POST">
          <label>Name:</label>
          <input type="text" name="name" required />
          <br><br>
          <label>Email:</label>
          <input type="email" name="email" required />
          <br><br>
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
});

server.listen(3002, () => {
  console.log("✅ Server running on http://localhost:3002");
});
