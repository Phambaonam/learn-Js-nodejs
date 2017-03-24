/** Đây là file khởi động toàn bộ hệ thống chat server **/

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(app);
const shortid = require('shortid');

const User = require('./user.js').User;
const Token = require('./user.js').Token;

let users = [];
let tokens = [];

function Register(){
	
}

server.listen(3000,function () {
	console.log('Running on port 3000')
})

