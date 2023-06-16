const express = require('express');
const app = express();
const server = app.listen(7000);
const io = require('socket.io')(server);

app.use(express.static(__dirname + "/static/"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

const users = [];

io.on('connection', function(socket){
    console.log('A user has connected');

    socket.on('join', function(name) {
        socket.name = name;
        users.push(name);
        io.emit('user_joined', users);
        updateClientList(io);
        console.log(name + ' has joined the chat');
    });

    socket.on('chat_message', function(data) {
        if (!data.recipient || data.recipient === "Everyone") {
            io.emit('chat_message', { message: data.message, sender: data.sender });
        } else {
            let recipientSocket = findSocketByName(io, data.recipient);
            if (recipientSocket) {
                recipientSocket.emit('private_message', { message: data.message, sender: data.sender, recipient: data.recipient });
                socket.emit('private_message', { message: data.message, sender: data.sender, recipient: data.recipient });
            } else {
                socket.emit('chat_error', 'Error: Client not found');
            }
        }
    });

    socket.on('disconnect', function(){
        const index = users.indexOf(socket.name);
        if(index !== -1){
            users.splice(index, 1);
            io.emit('user_left', users);
            updateClientList(io);
        }
    });
});

function findSocketByName(io, name) {
    const sockets = io.sockets.sockets;
    for (const socketId in sockets) {
        const socket = sockets[socketId];
        if (socket.name === name) {
            return socket;
        }
    }
    return null;
}

// Helper function to update the list of connected clients
function updateClientList(io) {
    let clientList = ["Everyone"];
    let sockets = io.sockets.sockets;
    for (const socketId in sockets) {
        const socket = sockets[socketId];
        if (socket.name) {
            clientList.push(socket.name);
        }
    }
    io.emit('client_list', clientList);
}


app.get('/', function(req, res){
    res.render('index', {});
});

app.get('/favicon.ico', (req, res) => res.status(204));