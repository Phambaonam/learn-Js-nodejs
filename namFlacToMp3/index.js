//TODO: File này là file phối hợp giữa scanfile.js và converter.js

let scanFile = require('./scanfile').scanFile;
let converter = require('./converter').Converter;
const Promise = require('bluebird');
const path = require('path');
const sourceFolder = __dirname + '/Flac';
const destFolder = __dirname + '/mp3';
const writer = require('fs').createWriteStream(__dirname + '/log.txt');
let count = 0;

renderFile = (arrFlac, arrMp3, convert, sumFiles) => {
    let tempFlac = arrFlac.slice(0);
    let tempMp3 = arrMp3.slice(0);
    tempFlac.forEach((file, index) => {
        let inputFile = convert.sourceFolder + '/' + file;
        let outputFile = convert.destFolder + '/' + tempMp3[index];
        if (count < 2) {
            count++;
            arrFlac.shift();
            arrMp3.shift();
            convert.flacToMp3(inputFile, outputFile)
                .then((success) => {

                    console.log(file + 'converted completed');
                    count--;
                    renderFile(arrFlac, arrMp3, convert);
                }).catch((err) => {

                count--;
                writer.write(err + '\n');
                renderFile(arrFlac, arrMp3, convert);
            });
        }
    });
};



async function runner(sourceFolder, destFolder) {
    let myConvert = new converter(sourceFolder, destFolder);
    let myScanner = new scanFile(sourceFolder);
    let filesArrFlac = await myScanner.listAllFlac(sourceFolder);
    let filesArrMp3 = myConvert.getArrMp3(filesArrFlac);

    renderFile(filesArrFlac, filesArrMp3, myConvert, filesArrFlac.length);

}


runner(sourceFolder, destFolder);
