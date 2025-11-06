const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  // 🟢 Route: Display the form
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(`
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
    `);
  }

  // 🟣 Route: Handle form submission
  if (req.url === "/submit" && req.method === "POST") {
    let body = "";

    // Collect chunks of incoming data
    req.on("data", chunk => {
      body += chunk;
    });

    // When all data has been received
    req.on("end", () => {
      // 🔹 1️⃣ Print raw body (unparsed)
      console.log("📦 Raw Body:", body); 
      // Example: name=Mohan&email=mohan%40gmail.com

      // 🔹 2️⃣ Parse the data
      const parsedData = querystring.parse(body);

      // 🔹 3️⃣ Print parsed object
      console.log("✅ Parsed Data:", parsedData); 
      // Example: { name: 'Mohan', email: 'mohan@gmail.com' }

      // Just acknowledge the browser
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Form received successfully — check terminal for output!");
    });

    return;
  }

  // 🔴 Route: 404
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("404 Not Found");
});

server.listen(3011, () =>
  console.log("✅ Server running on http://localhost:3011")
);
