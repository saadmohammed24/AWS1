import { readFile, writeFile } from 'fs/promises';
import fs from 'fs';
import http from 'http';
import https from 'https';
const httpPort = 80;
const httpsPort = 443;


const httpServer = http.createServer((req, res) => {
    logRequestDetails(req, res);
    res.end("Hello World from Server 1 : 8080");
});
const httpsServer = https.createServer({
    key: fs.readFileSync('certs/privkey.pem'),
    cert: fs.readFileSync('certs/fullchain.pem') 
},
(req, res)=>{   logRequestDetails(req, res);
    res.end("Hello World from Server 1 : 8080");
});
httpServer.listen(httpPort, () => {
    console.log(`Server is running at ${httpPort}`);
});
httpsServer.listen(httpsPort, () => {
    console.log(`Server is running at ${httpsPort}`);
});

function logRequestDetails(req, res) {
   const remoteAddress = req.socket.remoteAddress;
   const userAgent = req.headers['user-agent'];
   const dateTime = new Date().toISOString();
   const method = req.method;
   const url = req.url;
}

/*
Middleware : 
 Middleware functions have access to the HTTP request and response for each application route (or endpoint). 
They can execute any code, make changes to the request and the response objects, end the request-response cycle, 
 or call the next middleware function in the stack.
*/