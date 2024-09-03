const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('Hello World');

})

server.listen(3300, () => {
    console.log('服务器启动成功！http://localhost:3300');
})