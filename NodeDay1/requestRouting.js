const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Home Page</h1>");
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About Page</h1><p>This is the About section.</p>");
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Page Not Found</h1>");
    }
});

server.listen(3002, () => {
    console.log("✅ Server running on http://localhost:3002");
});
