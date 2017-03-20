var app = require('express')();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);
// const bodyParser = require('body-parser');
// const nunjucks  = require('nunjucks');

app.get('/', function (req, res) {
    // res.sendfile(__dirname + './../views/index.html');
    res.send('ok');
});


// let message = "";
/***
 * Danh sách các message
 * welcome: chào mừng người dùng tham gia chat room
 * chat: người dùng gửi đoạn chat đến
 */
// io.on('connection', (socket) => {
//     socket.emit('welcome', {message: 'Chào mừng bạn tham gia diễn đàn'});
//
//     //Don't use message name 'pong'. It is reserved message
//     socket.on('chat', (data) => {
//
//         console.log(data);
//         //To broadcast, simply add a broadcast flag to emit and send method calls.
//         //Broadcasting means sending a message to everyone else except for the socket that starts it.
//         socket.broadcast.emit('chat', data);
//     });
//
// });


