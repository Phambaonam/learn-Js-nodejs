/***
 *  TODO: hãy dùng midlleware multer của express để upload file thông qua form
 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const shortid = require('shortid');

// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.upload = multer({ dest: 'uploads/' });

//
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + '-' +  file.originalname );
    }

});

function fileFilter (req, file, cb) {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true);
    } else{
        cb(new Error(file.mimetype + ' not allowed'));
    }
}


app.upload = multer({ storage: storage ,fileFilter:fileFilter});


require('./routers/index')(app);



app.use(function (err, req, res, next) {
    // console.error(err.stack);
    res.status(500).send('This file is not accepted!')
});

const server = app.listen(3000, () => {
    console.log('Running on port 3000!');
});

module.exports = server;
