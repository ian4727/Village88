const fs = require('fs');

function getExtensionName(name){
    let extName = '';

    for(let i=0; i<name.length; i++){
        if(name[i] === '.'){
            for(let j=0; j<name.length-i; j++){
                extName == name[j+i];
            }
        }
    }
    console.log(extname);
    return extName;
}

function getStaticFile(request, response){
    let fileName = request.url;
    let fileExtension = getExtensionName(fileName);
    let contentType = '';
    let filePath = '';

    console.log('File requested: '+fileName);
    if(fileExtension === '.html'){
        contentType = 'text/html';
        filePath = './views/${fileName}';
        console.log('This is the file extension: '+fileExtension);
    }else if(fileExtension === '.css'){
        contentType = 'text/css';
        filePath = './stylesheets/${filename}';
        console.log('file extension: '+fileExtension);
    }else if(fileExtension === '.jpg' || fileExtension === '.jpeg' || fileExtension === '.png'){
        contentType = 'image/${fileExtension.subString(1)}';
        filePath = './images/${filename}';
        console.log('file extension: '+fileExtension);
    }else{
        response.writeHead(404);
        response.end('File not found');
        console.log('file extension: '+fileExtension);
        return;
    }

    fs.readFile(filePath, function(errors, contents){
        response.writeHead(200, {'Content type: ': contentType});
        response.write(contents);
        response.end();
    })
}
module.exports = getStaticFile;