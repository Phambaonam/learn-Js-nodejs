/**
 * Created by phambaonam on 10/02/2017.
 */

let plotly = require('plotly')('phambaonam1312', 'OsykMkaRuxWvlxQGZVc4');

let fs = require('fs');

// ax2 + bx + c = 0
let quadratic = require('./../quadaratic/quadratic');

let x = (() => {
    let copy_x = [];
    for (let i = 2; i > -6; i -= 0.05) {
        copy_x.push(i);
    }
    return copy_x;
})();

let y = (() => {
    let copy_y = [];
    for (let key in x) {
        let result = 1 * x[key] * x[key] + 4 * x[key] + 4;
        copy_y.push(Number(result));
    }
    return copy_y;
})();

let trace = {
    x: x,
    y: y,
    type: "scatter"

};
console.log(trace);

let figure = {'data': [trace]};

let imgOpts = {
    format: 'png',
    width: 1000,
    height: 500
};


plotly.getImage(figure, imgOpts, (error, imageStream) => {
    if (error) return console.log(error);

    let fileStream = fs.createWriteStream('do_thi.png');
    imageStream.pipe(fileStream);
});
