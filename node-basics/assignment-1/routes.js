const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('Content-Type' , 'text/html');
        res.write(`
        <html>
            <head><title>Enter Username</title></head>
            <body>
            <form action="/create-user" method="POST">
                <input type="text" name="username" placeholder="Enter username" required />
                <button type="submit">Submit</button>
            </form>
            </body>
        </html>
        `);
        return res.end();
    }
    if(url === '/users' && method === 'GET'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const users = ['Alice', 'Bob', 'Charlie'];
        return res.end(JSON.stringify(users));
    }
    if (url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
    });
    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const username = parsedBody.split('=')[1];
        res.writeHead(302, {Location: '/'});
        console.log(`New User: ${username}`);
        res.end();
    });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1> Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end(); 
};


module.exports = requestHandler;