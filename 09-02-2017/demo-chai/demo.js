/**
 * Created by phambaonam on 09/02/2017.
 */
var math = require('./math');

try{
   let devide = math.divide(10.0,3.0);
    console.log(devide);
} catch(err) {
    throw new Error('Error ',err.message);
}