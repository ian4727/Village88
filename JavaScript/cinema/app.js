var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
    console.log('client request URL: ', request.url);

     if(request.url === '/movies') {
        fs.readFile('views/movies.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    /*}else if (request.url === "/movies") {
        fs.readFile('views/movies.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents); 
            response.end();
        });*/
   }else if(request.url === "/stylesheets/style.css"){
        fs.readFile('stylesheets/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents); 
            response.end();
        });
   }else if(request.url === "/theaters"){
        fs.readFile('views/theaters.html', 'utf8',  function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
   }else if(request.url === "/movies/new"){
        fs.readFile('views/new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
   }else if(request.url === '/images/poster1.jpg'){
        fs.readFile('./images/poster1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }else if(request.url === '/images/poster2.jpg'){
        fs.readFile('./images/poster2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }else if(request.url === '/images/poster3.jpg'){
        fs.readFile('./images/poster3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }else if(request.url === '/images/cinema1.jpg'){
        fs.readFile('./images/cinema1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }else if(request.url === '/images/cinema2.jpg'){
        fs.readFile('./images/cinema2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }else if(request.url === '/images/cinema3.jpg'){
        fs.readFile('./images/cinema3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }else{
        response.end('URL requested is not available');
    }
});
server.listen(7890);
console.log("Running in localhost at port 7890");