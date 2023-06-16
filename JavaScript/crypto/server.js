const axios = require('axios');
const express = require('express');
const app = express();

const cg_api = 'https://api.coingecko.com/api/v3/exchanges';
const html_file = 'index.ejs';

app.get('/', function(req, res){
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get(cg_api)
    .then(data => {
        // log the data before moving on! 
        console.log(data);
        // rather than rendering, just send back the json data!
        res.sendFile(path.join(__dirname, 'index.html'));
    })
    .catch(error => {
        // log the error before moving on!
        console.log(error);
        res.json(error);
    })
});

app.listen(8500, function(){
    console.log("Listening on port: 8500");
});