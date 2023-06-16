var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + "/static/"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index')
})

app.get('/result', function(req, res){
    res.render('result')
})

app.post('/result', function(req, res){
    console.log("POST DATA \n\n", req.body)
    res.render('result', {formData: req.body})
})

app.listen(8088, function(){
    console.log('listening to port 8088');
})