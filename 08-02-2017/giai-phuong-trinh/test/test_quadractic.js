/**
 * Created by phambaonam on 08/02/2017.
 */

const quadaratic = require('../quadaractic/quadratic');
const chai = require('chai');
chai.should();

describe('Test input a of quadaratic', function () {

    it('Input param a equal 0', function () {
        ( function () {
            quadaratic.quadratic(0, 2, -4)
        }).should.throw('Input a is invalid');
    });

});

describe('Test result  of quadaratic', function () {

    let delta = quadaratic.quadratic(1, 4, 1);

    it('Check delta less than 0', function () {
        ( function (delta) {
            quadaratic.checkResult(delta)
        }).should.throw('the equation has no solution');
    });

    it('Check delta greater than 0', function () {
        ( function (delta) {
            quadaratic.checkResult(delta)
        }).should.equal('ok');
    });
});
