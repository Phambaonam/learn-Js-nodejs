/**
 * Created by phambaonam on 08/02/2017.
 */

const quadaratic = require('./quadratic');
const chai = require('chai');
chai.should();

describe('Test result of quadaractic', function () {

    it('Input param a equal 0', function () {
        ( function(){
            quadaratic.result(0, 2, -4)
        }).should.throw('Input a is invalid');
    });

    // it('Check delta rather than 0',function() {
    //     quadaratic.result(1, 4, 4).should.equal('delta rather than 0');
    // });
});

