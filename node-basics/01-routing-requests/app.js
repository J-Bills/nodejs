const http = require('http');

// A way to create a listener but we can also use an arrow function
// function rqListener(req, res){

// };
const server = http.createServer((req, res)=>{
  console.log(req.url, req.method, req.headers);
   // process.exit(); //Hard exits the event loop
  res.setHeader('Content-Type', 'text/html');
  //sending html code to the response
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body?><h1> Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);


