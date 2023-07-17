const http = require('http');

const server = http.createServer((req, res) => {
  // GET request handler
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, GET request!');
  }
  // POST request handler
  else if (req.method === 'POST') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, POST request!');
  }
  // PUT request handler
  else if (req.method === 'PUT') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, PUT request!');
  }
  // DELETE request handler
  else if (req.method === 'DELETE') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, DELETE request!');
  }

 else if (req.method === 'PATCH') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, PATCH request!');
  }
  // HEAD request handler
  else if (req.method === 'HEAD') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, HEAD request!');
  }

  // OPTIONS request handler
  else if (req.method === 'OPTIONS') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, OPTIONS request!');
  }

  // PROPFIND request handler
  else if (req.method === 'PROPFIND') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, PROPFIND request!');
  }

  // Invalid request method
  else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Invalid request method');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/index.htm') 
// Assume we have a static folder having 3 static files 1)example.json 2)example.png  3)index.htm
    res.writeHead(200,{'content-type':'text/html'})
    readStream.pipe(res)
}).listen(3000);

if (req.url === '/') {
  res.statusCode = 200;
  res.end('OK');
} else if (req.url === '/not-found') {
  res.statusCode = 404;
  res.end('Not Found');
} else if (req.url === '/server-error') {
  res.statusCode = 500;
  res.end('Internal Server Error');
} else {
  res.statusCode = 400;
  res.end('Bad Request');
}

server.listen(3000, () => {
console.log('Server is running on port 3000');
});
