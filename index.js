const http = require('http');
const fs = require('fs');
global.DEBUG = true;

const server = http.createServer((request, response) => {
    if(DEBUG)console.log('Request', request.url);
    switch (request.url){
        case '/':
            if(DEBUG)console.log('Root Route');
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.end('<h1>Welcome Root Route!</h1>');
        case '/home':
            if(DEBUG)console.log('Home Route');
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.end('<h1>Welcome Home!</h1>');
        case '/about':
            if(DEBUG)console.log('About Route');
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.end('<h1>Welcome About!</h1>');
        default:
            response.writeHead(200, { 'Content-type': 'text/html' });
    }
});

server.listen(3000, ()=> {
    console.log('listening on port 3000');
})