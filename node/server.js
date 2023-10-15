const http = require('http');

console.time("serverStart");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(3005, () => {
    console.timeEnd("serverStart");
    console.log('Server running at http://localhost:3005/');
});
