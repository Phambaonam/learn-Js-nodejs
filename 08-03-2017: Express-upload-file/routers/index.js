/**
 * Created by phambaonam on 07/03/2017.
 */
// const app = require('../config');


module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello World');
    });

    app.get('/data', (req, res) => {
        // console.log(res);
        res.status(200).send({name: 'nam', age: 22});
    });

    app.get('/json', function (req, res) {
        res.json({msg: 'Hello'});
    });

    app.post('/', function (req, res) {
        console.log(req.body);
        res.json(req.body);
    });

    app.post('/upload', app.upload.single('photo'), function (req, res, next) {
        // req.file is the `avatar` file
        console.log(req.file);
        // req.body will hold the text fields, if there were any
        // console.log(req.body);
        res.send('upload successed');
    });

};
