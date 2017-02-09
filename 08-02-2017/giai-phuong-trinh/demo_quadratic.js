/**
 * Created by phambaonam on 08/02/2017.
 */

const demo = require('./quadaratic/quadratic');

try {
    let result = demo.quadratic(1, 4, 3);
    console.log(result);
    console.log(typeof result);


} catch (error) {
    console.log(error.message);
}


