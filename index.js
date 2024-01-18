const http = require('http');
const fs = require('fs');
global.DEBUG = false;

const server = http.createServer((request, response) => {
    if(DEBUG)console.log('Request', request.url);
    switch (request.url){
        case '/':
            if(DEBUG)console.log('Root Route');
            let filename = 'index.html';
            fs.readFile(filename, (error, content) =>{ // can refactor this into a function
                if(error) {
                    response.writeHead(500, { 'Content-Type': 'text/html' });
                    response.end('500 Internal Server Error');
                } else {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                }
            });
            break;
        case '/home':
            if(DEBUG)console.log('Home Route');
            let aboutfile = 'about.html';
            fs.readFile(aboutfile, (error, content) =>{
                if(error) {
                    response.writeHead(500, { 'Content-Type': 'text/html' });
                    response.end('500 Internal Server Error');
                } else {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                }
            });
            break;
        case '/about':
            if(DEBUG)console.log('About Route');
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.end('<h1>Welcome About!</h1>');
            break;
        default:
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.end('Error 404: Not Found');
            break;
    }
});

server.listen(3000, ()=> {
    console.log('listening on port 3000');
})