var session = require('express-session');
var express = require("express");
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + "/static/"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

app.get('/', function(req, res){
    var sorryDisplay = 'form-hidden';
    if(req.session.customer == 0){
        sorryDisplay = 'form-visible';
        req.session.customer = 0;
    }
    if(!req.session.customer){
        req.session.customer = 10;
    }
    if(!req.session.code){
        req.session.code = Math.floor(Math.random() * 10000000);
    }
    
    res.render('index', { customer: req.session.customer, code: req.session.code, sorryDisplay: sorryDisplay});
  })

app.post('/process', function(req, res){
    if(req.body.action === 'Reset count'){
        req.session.customer = 10;
    }else if(req.body.action === 'Claim again'){
        if (req.session.customer > 0) {
            req.session.customer--;
        }
        else{
            req.session.customer = 0;
        }
    }
    var code = Math.floor(Math.random() * 10000000);
    req.session.code = code;
    
    console.log(code);
    res.redirect('/');
});


app.listen(8089, function(){
    console.log('listening to port 8089');
});