const http = require("http");



const server = http.createServer((req, res) => {
    const { url, method } = req;

    if (url === "/" && method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(`
      <form action="/submit" method="POST">
        <input name="name" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <button>Submit</button>
      </form>
    `);
    }

    if (url === "/submit" && method === "POST") {
        let data = "";
        req.on("data", c => data += c);
        req.on("end", () => {
            console.log("📥", data);
            res.writeHead(302, { Location: "/success" });
            res.end();
        });
        return;
    }

    if (url === "/success") {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end("<h3>Form submitted successfully!</h3>");
    }

    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h3> Page not found</h3>");
})



server.listen(3012, () =>
    console.log("Server on http://localhost:3012"));
