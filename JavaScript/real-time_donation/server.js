const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const server = app.listen(1339);
const io = require('socket.io')(server);

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + "/static/"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

let cashDonation = 0;

app.get('/', function(req, res){
    res.render('index', {cashDonation});
})

io.on('connection', function(socket) {
    socket.emit('updateCash', cashDonation); // send initial total cash donation to new socket connection
    socket.on('donate', function() {
        cashDonation += 10; // add 10 to total cash donation
        io.emit('updateCash', cashDonation); // send updated total cash donation to all connected sockets
    });
    socket.on('redeem', function() {
        if (cashDonation >= 10) { // check if there is enough cash to redeem
            cashDonation -= 10; // subtract 10 from total cash donation
            io.emit('updateCash', cashDonation); // send updated total cash donation to all connected sockets
        }
    });
})