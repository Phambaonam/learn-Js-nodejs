var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const port = 3000;
server.listen(port,function () {
    console.log('Server running on port ' + port);
});
// function handler(req, res) {
//     fs.readFile(__dirname + '/chat.html', (err, data) => {
//         if (err) {
//             res.writeHead(500);
//             return res.end('Error loading chat.html');
//         }
//
//         res.writeHead(200);
//         res.end(data);
//     });
// }

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/chat.html');
});

let message = "";
/***
 * Danh sách các message
 * welcome: chào mừng người dùng tham gia chat room
 * chat: người dùng gửi đoạn chat đến
 */
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
