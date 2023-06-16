var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
    console.log('client request URL: ', request.url);
    if(request.url === '/'){
        fs.readFile('index.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }else if (request.url === "/style.css") {
        fs.readFile('style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents); 
            response.end();
        });
   }else if (request.url === "/village88") {
        fs.readFile('village88.html', 'utf8',  function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
   }
   else if (request.url === "/training/new") {
    fs.readFile('training.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(contents); 
        response.end();
    });
}else{
        response.end('URL requested is not available');
   }
});
server.listen(6543);