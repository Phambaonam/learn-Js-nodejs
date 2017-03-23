/**
 * Created by Doremon on 3/21/17.
 */
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3000;
server.listen(port,function () {
    console.log('server running on port ' + port);
});

// app.get('/', function (req, res) {
//     res.sendfile(__dirname + '/login.html');
// });

app.get('/',function (req,res) {
    res.sendfile(__dirname + '/group.html');
});

// usernames which are currently connected to the chat
let usernames = {};

let rooms = [{room1:'Node.js'},{room2:'HTML'},{room3:'PHP'}];

io.on('connection', function (socket) {

    // when the client emits 'adduser', this listens and executes
    socket.on('addUser', function(username){
            console.log(username);
            // we store the username in the socket session for this client
            // socket.username = username;
            // add the client's username to the global list
            usernames[username] = username;
            // echo to client they've connected
            socket.emit('waitRoom', username);
            // echo globally (all clients) that a person has connected
            socket.broadcast.emit('waitRoom', username);
            // update the list of users in chat, client-side
            io.emit('updateusers', usernames);

    });

    // when the client emits 'sendchat', this listens and executes
    socket.on('sendchatPerson', function (data) {
        console.log(data);
        // we tell the client to execute 'updatechat' with 2 parameters
        // io.emit('updatechat', socket.username, data);
        //Broadcasting means sending a message to everyone else except for the socket that starts it.
        socket.broadcast.emit('sendchatGroup', data);
    });

    // when the user disconnects.. perform this
    // socket.on('disconnect', function(){
    //     // remove the username from global usernames list
    //     delete usernames[socket.username];
    //     // update list of users in chat, client-side
    //     io.emit('updateusers', usernames);
    //     // echo globally that this client has left
    //     socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
    // });
});

// io.on('connection', (socket) => {
//     socket.emit('welcome', {message: 'Chào mừng bạn tham gia diễn đàn'});
//
//     //Don't use message name 'pong'. It is reserved message
//     socket.on('adduser', (data) => {
//
//         console.log(data);
//         //To broadcast, simply add a broadcast flag to emit and send method calls.
//         //Broadcasting means sending a message to everyone else except for the socket that starts it.
//         socket.broadcast.emit('chat', data);
//     });
//
// });