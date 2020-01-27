
const express = require('express');
const app = express();
app.use(express.static('public'));
var http = require('http').Server(app);
const port = process.env.PORT || 8080;
var io = require('socket.io')(http);//socket.io object attached to http server



app.get('/', (req, res) => res.sendFile(__dirname+ '/public/default.html'));

http.listen(port, () => console.log(`Listening on port ${port}!`));

// setup  socket server
io.on('connection', function(socket) {
    console.log('new connection');

    // Called when the client calls socket.emit('move')
    socket.on('move', function(msg) {//callback to handle messages - listening for move
       socket.broadcast.emit('move', msg);//send received 'move' message to everyone in the connected socket except for the socket who just sent it
    });
});
