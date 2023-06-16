const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const server = app.listen(1340);
const io = require('socket.io')(server);

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + "/static/"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

io.on('connection', function(socket) {
    console.log('a user connected');

    socket.on('updateColor', function(color) {
        console.log('background color updated to: ' + color);
        io.emit('updateColor', color);
    });

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});