/**
 * Created by Doremon on 3/20/17.
 */

var app = require('express')();
var server = require('http').Server(app);
const bodyParser = require('body-parser');
const nunjucks  = require('nunjucks');
const  chat = require('./routes/chat');
const port = 4000;

// view engine setup
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.set('view engine', 'html');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use('/chat', chat);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/views/index.html');
    // res.send('ok');
});
app.post('/',function(req,res){
    var name = req.body.user;
    console.log();
});

server.listen(port,function () {
    console.log('Server running on port ' + port);
});

module.exports = app;