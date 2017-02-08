/**
 * Created by phambaonam on 08/02/2017.
 */

const demo = require('./quadratic');

try{
    let result = demo.result(1,4,2);
    console.log(result);
} catch(error){
    console.log(error.message);
}