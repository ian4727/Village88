var session = require('express-session');
var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static/"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

app.get('/', function(req, res){
    
    if(!req.session.views){
        req.session.views = 1;
    }else{
        req.session.views++;
    }
    var message = req.session.views % 2 === 0 ? 'Even flowers need rain' : 'Beat the odds';
    res.render('index', {session: req.session, message: message});
})

app.post('/users', function(req, res){
    req.session.name = req.body.name;
    console.log(req.session.name);

    res.redirect('/');
})

app.post('/reset', function(req, res){
    req.session.views = 0;
    res.redirect('/');
})

app.post('/repeat', function(req, res){
    var message = req.session.views % 2 === 0 ? 'Even flowers need rain' : 'Beat the odds';
    res.render('index', {session: req.session, message: message})
    //res.redirect('/');
})

app.listen(8087, function() {
    console.log("listening on port 8087");
})