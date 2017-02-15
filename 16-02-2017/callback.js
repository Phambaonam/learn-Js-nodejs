/**
 * Created by phambaonam on 16/02/2017.
 */
const fs = require('fs');


// Blocking code - Without callback
// chay theo thu tu

console.log("Sync Started");
let data = fs.readFileSync('./data/Sync.txt');

console.log(data.toString());
console.log("Sync Ended");


// Non-Blocking Code - With callback
// chay khong theo thu tu
console.log("-----Async start------");
fs.readFile('./data/Async.txt', (err, data) => {
    if (err)
        return console.error(err);
    console.log(data.toString());
});
console.log("----Async Ended----");


// Callback Hell
let file = './data/callback-hell.txt';

fs.exists(file, (exits) => {
    if (exits) {
        fs.stat(file, (err, stats) => {
            if (err) {
                throw err;
            }
            if (stats.isFile()) {
                fs.readFile(file, 'utf8', (err, data) => {
                    if (err) {
                        throw err;
                    }
                    console.log(data);
                });
            }
        });
    }
});

// Callback Hell - Solution

ReadFile = (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
};

Stat = (err, stats) => {
    if (err) {
        throw err;
    }
    if (stats.isFile()) {
        fs.readFile(file, 'utf8', ReadFile);
    }
};

cbExists = (exists) => {
    if (exists) {
        fs.stat(file, Stat);
    }
};

fs.exists(file, cbExists);

