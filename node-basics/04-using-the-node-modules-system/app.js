const http = require('http');
// importing the module needed to work with the file system
const routes = require('./routes');

console.log(routes.someText)
const server = http.createServer(routes.handler);


server.listen(3000);
