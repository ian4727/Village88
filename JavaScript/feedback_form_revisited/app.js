const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const server = app.listen(1338);
const io = require('socket.io')(server);

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + "/static/"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index')
})

io.on('connection', function(socket){
    console.group('A client connected');
    
    socket.on('posting_form', function(formData){
        console.log(formData);
        
        let randomNumber = 'Random number generated idnumber is: '+Math.floor(Math.random() * 1000) + 1;
        let message = "You emitted the following value to the server: { name: '"+formData.fname+"', course_title: '"+formData.course+"', score: "+formData.score+", reason: '"+formData.reason+"' }";
        socket.emit('updated_message', message + '<br><br>' + randomNumber);
        console.log(message);
    });
});

app.post('/', function(req, res){   
    const formData = {
        fname: req.body.name,
        course: req.body.course,
        score: req.body.score,
        reason: req.body.reason
    };
    io.emit('posting_form', formData);
    res.redirect('/');
});
