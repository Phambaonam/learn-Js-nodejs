/**
 * Created by phambaonam on 16/02/2017.
 */

let fs = require('fs');

fs.open('TestFile.txt', 'r',  (err, fd)=> {

    if (err) {
        return console.error(err);
    }

    let buffr = new Buffer(1024);

    fs.read(fd, buffr, 0, buffr.length, 0,  (err, bytes)=> {

        if (err) throw err;

        // Print only read bytes to avoid junk.
        if (bytes > 0) {
            console.log(buffr.slice(0, bytes).toString());
        }

        // Close the opened file.
        fs.close(fd,  (err)=> {
            if (err) throw err;
        });
    });
});
