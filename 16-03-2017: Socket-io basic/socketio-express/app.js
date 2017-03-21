/**
 * Created by Doremon on 3/21/17.
 */
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.listen(8000,function () {
    console.log('server running on port 8000');
});

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.emit('welcome', {message: 'Chào mừng bạn tham gia diễn đàn'});

    //Don't use message name 'pong'. It is reserved message
    socket.on('chat', (data) => {

        console.log(data);
        //To broadcast, simply add a broadcast flag to emit and send method calls.
        //Broadcasting means sending a message to everyone else except for the socket that starts it.
        socket.broadcast.emit('chat', data);
    });

});