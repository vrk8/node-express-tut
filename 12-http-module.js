const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url === '/') {
        res.write(`<h1>Hello Welcome to our home page</h1><br><h2> The time is ${new Date().toUTCString()}</h2>`);
        res.end();
    }
    else if(req.url==='/about') {
        res.write(`<h1>All you want about this application is here in this page</h1><br><h2> 
                    The time is ${new Date().toUTCString()}</h2>`);
        res.end();
    } else {
        res.write(`<h2>Oops. You have no clue where you want to go.</h2><a href="/">Back home</a>`);
        res.end();
    }
}).listen(5000);