const http = require('http');

// A way to create a listener but we can also use an arrow function
// function rqListener(req, res){

// };
const server = http.createServer((req, res)=>{
  console.log(req.url, req.method, req.headers);
   // process.exit(); //Hard exits the event loop
});

server.listen(3000);


