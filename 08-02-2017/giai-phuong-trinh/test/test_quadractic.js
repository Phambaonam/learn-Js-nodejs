/**
 * Created by phambaonam on 08/02/2017.
 */

const quadaratic = require('../quadaratic/quadratic');
const chai = require('chai');
chai.should();


describe('Test input a of quadaratic', () => {

    it('Input param a equal 0', () => {
        ( () => {
            quadaratic.quadratic(0)

        }).should.throw('Input a is invalid');
    });

    it('Delta less than 0 ', () => {
        (() => {
            quadaratic.quadratic(1, 4, 5)
        }).should.throw('the equation has no solution');
    });

    it('Delta equal 0', () => {
        quadaratic.quadratic(1, 4, 4).should.equal(2);
    });

    it('Delta greater than 0', () => {
        quadaratic.quadratic(1, 4, 3).should.deep.equal([-1, -3]);
    });

});














