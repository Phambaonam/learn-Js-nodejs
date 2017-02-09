/**
 * Created by phambaonam on 08/02/2017.
 */

const demo = require('./quadaractic/quadratic');

try {
    let delta = demo.quadratic(1, 4, 4);
    console.log(delta);
    let result = demo.checkResult(delta);
    console.log(result);

} catch (error) {
    console.log(error.message);
}
