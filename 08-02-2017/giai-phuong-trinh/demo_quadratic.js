/**
 * Created by phambaonam on 08/02/2017.
 */

const demo = require('./quadaractic/quadratic');

try {
    let result = demo.quadratic(1, 4, 2);
    console.log(result);
} catch (error) {
    console.log(error.message);
}