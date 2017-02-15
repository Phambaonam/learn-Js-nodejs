/**
 * Created by phambaonam on 14/02/2017.
 */

const testFolder = './flac';
const fs = require('fs');
const spawn = require('child_process').spawn;
const path = require('path');
const recursive = require('recursive-readdir');
const Promise = require("bluebird");

fs.readdir(testFolder,'utf8',recur=(err,files)=>{
    console.log(files);
});



recursive(testFolder, (err, files) => {
    files.forEach(file => {
        console.log(file);
        if (path.extname(file) === '.flac') {
            transcode(file);
        }
    });
});

transcode = (file) => {

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
};



