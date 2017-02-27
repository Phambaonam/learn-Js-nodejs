/**
 * Created by phambaonam on 14/02/2017.
 */

const pathFolder = './music';
const fs = require('fs');
const spawn = require('child_process').spawn;
const path = require('path');
const recursive = require('recursive-readdir');
const Promise = require("bluebird");

let arr = [];


/***
 * Read file flac
 * @param err
 * @param files
 * @returns {Array}
 * @constructor
 */
ReadFileFlac = (err, files) => {
    console.log(1);
    if (err) {
        throw err;
    }
    files.forEach(file => {
        if (path.extname(file) === '.flac') {
            arr.push({name: file, status: 'flac'});
            convertFileFlac(file);
        }
    });
    return arr;
};


/***
 * convert file flac
 * @param file
 */
convertFileFlac = (file) => {
    console.log(2);
    let decode = spawn('flac', [
        '--decode',
        '--stdout',
        file
    ]);
    let encode = spawn('lame', [
        '-b',
        '320',
        '-',
        file.replace('.flac', '.mp3')
    ]);
    decode.stdout.pipe(encode.stdin);
    return encode;
};



/***
 * Read file mp3
 * @param err
 * @param files
 * @constructor
 */
ReadFileMp3 = (err, files) => {
    console.log(3);
    if (err) {
        throw err;
    }
    files.forEach(file => {
        if (path.extname(file) === '.mp3') {
            console.log(file);
            fs.readFile(file, ReadDataMp3);
        }
    });
};

/***
 * read data mp3
 * @param err
 * @param data
 * @constructor
 */
ReadDataMp3 = (err, data) => {
    console.log(4);
    if (err) {
        throw err;
    }
    console.log(data);
};

//read path file
recursive(pathFolder, ReadFileFlac);
recursive(pathFolder, ReadFileMp3);