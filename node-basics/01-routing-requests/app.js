const http = require('http');

// A way to create a listener but we can also use an arrow function
// function rqListener(req, res){

// };
const server = http.createServer((req, res)=>{
  //Parsing the url to start handling routes
  const url = req.url;
  if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method ="POST"><input type="text" name="form-message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    // return so that we can exit out of the function
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  //sending html code to the response
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body?><h1> Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);


