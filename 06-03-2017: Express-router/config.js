/**
 * Created by phambaonam on 06/03/2017.
 */
const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log('Running on port 3000!');
});
require('./routers/index')(app);
module.exports = server;
