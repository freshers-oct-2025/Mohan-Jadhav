console.log("hello")

const http  = require("http")

const server=http.createServer((req,res)=>{
    res.writeHead(200,"contect-type"-"plain-text");
    res.end("hello")
})

server.listen(3004, ()=>{
    console.log("server run http://localhost3004")
})
