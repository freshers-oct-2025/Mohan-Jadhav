const http = require('http');


const server=http.createServer((req, res) => {
    console.log("server created...",req)
})

server.listen(3007, () => {
    console.log("Server is running on http://localhost:3007");
}); 