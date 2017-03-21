/**
 * Created by NamDuyen on 20/03/2017.
 */
const app = require('express')();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const io = require('socket.io')(server);
// const  chat = require('./routes/chat');
const port = 3000;

let users = [];

// view engine setup
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.set('view engine', 'html');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
// app.use('/chat', chat);

app.get('/', function (req, res) {
    res.render('index');
    // res.send('ok');
});
app.post('/group', function (req, res) {
    let username = req.body.username;
    // add name of user when login success
    users.push({username: username});
    // [ { username: 'phambaonam' }, { username: 'nampb' } ]
    console.log(users);
    if (username === '') {
        res.redirect('/');
    } else {
        users.forEach(function (user, index, users) {
            // console.log(user);
            // res.render('detail-chat',data);
            res.render('group', {data: users[index]});
        });

    }
});

app.post('/detail-chat', function (req, res) {
    console.log(users);
    let groupName = req.body.mygroup;
    let detailGroup = {
        groupName: groupName,
    };
    users.forEach(function (user,index,users) {
        // res.render('detail-chat',data);
        res.render('detail-chat', {detailGroup: detailGroup, user: users[index]});
    });

});

// socket io
io.on('connection', function (socket) {
    socket.emit('welcome', {message: 'Chào mừng bạn tham gia diễn đàn!'});

    socket.on('chat', (data) => {
        console.log(data);
        //To broadcast, simply add a broadcast flag to emit and send method calls.
        //Broadcasting means sending a message to everyone else except for the socket that starts it.
        socket.broadcast.emit('chat', data);
    });
});

server.listen(port, function () {
    console.log('Server running on port ' + port);
});

module.exports = app;