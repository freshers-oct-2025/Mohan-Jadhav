const http = require("http");

const server = http.createServer((req, res) => {
    // 🔹 Print Request Headers (from browser to server)
    console.log("📩 Request Headers:");
    console.log(req.headers);

    // 🔹 Set and send Response Headers (from server to browser)
    res.writeHead(200, { "Content-Type": "text/html", "Custom-Header": "Hello" });
    res.end("<h2>Response sent with headers!</h2>");
});

server.listen(3009, () => {
    console.log("✅ Server running on http://localhost:3009");
});
