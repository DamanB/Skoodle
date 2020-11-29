var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static(__dirname + '/public'));

http.createServer(function (request, response) {
    redirect(request, response);
}).listen(8080);



function redirect(request, response){
    fs.readFile('./' + request.url, function (err, data) {
        //Will handle the requests for multiple types of pages 
        var dotoffset = request.url.lastIndexOf('.');
        var mimetype = dotoffset == -1
                        ? 'text/plain'
                        : {
                            '.html' : 'text/html',
                            '.ico' : 'image/x-icon',
                            '.jpg' : 'image/jpeg',
                            '.png' : 'image/png',
                            '.gif' : 'image/gif',
                            '.css' : 'text/css',
                            '.js' : 'text/javascript'
                            }[ request.url.substr(dotoffset) ];
        response.setHeader('Content-type' , mimetype);
        response.end(data);
    });
}