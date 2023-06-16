const http = require('http');
const fs = require('fs');
const static_contents = require('./static.js');

let server = http.createServer(function(request, response){
    //static_contents(request, response);   
    console.log('client request URL: ', request.url);
    let requests = {
        //HTML
        'views/index.html': '/',
    };
    let filePaths = Object.values(requests);
    let filePathFound = false;

    for(var i=0; i<filePaths.length; i++){
        if(request.url === filePaths[i]{
            filePathFound = true;
            fs.readFile('./' + Object.keys(requests[i], function(errors, contents){
                if(errors){
                    response.writeHead(404);
                    response.end('File not found!');
                }else{
                    response.writeHead(200, {'Content-Type': getContentType(Object.keys(requests)[i])});
                    response.write(contents);
                    response.end();
                }
            });
            break;
        })
    }
    if(!filePathFound){
        response.writeHead(500);
        response.end();
    }
});

function getContentType(url){
    var extension = url.substr(url.lastIndexOf('.'));
    if(extension === '.html'){
        return 'text/html';
    }else if(extension === '.css'){
        return 'text/css';
    }else if(extension === '.js'){
        return 'text/javascript';
    }else if(extension === '.jpg'){
        return 'image/jpg';
    }else if(extension === '.jpeg'){
        return 'image/jpeg';
    }else if(extension === '.png'){
        return 'image/png';
    }else if(extension === '.gif'){
        return 'image/gif';
    }else if(extension === 'woff'){
        return 'application/font-woff';
    }else{
        return 'text/plain';
    }
}


server.listen(8920, function(){
    console.log("Running in localhost at port 8920");  
});
 
