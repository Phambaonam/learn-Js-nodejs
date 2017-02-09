/**
 * Created by phambaonam on 08/02/2017.
 */


let result = [], x1, x2, x, delta;

/***
 *
 * @param a
 * @param b
 * @param c
 * @returns {Array}
 */
exports.quadratic = (a, b, c) => {

    if (a == 0) {
        throw new Error('Input a is invalid');
    }

    delta = b * b - 4 * a * c;

    x1 = (-b + Math.sqrt(delta)) / (2 * a);

    x2 = (-b - Math.sqrt(delta)) / (2 * a);

    x = Math.abs(b) / (2 * a);

    if (delta > 0) {

        result.push(x1, x2);
        return  result;

    } else if (delta == 0) {

        return x;

    } else {
        throw new Error('the equation has no solution');
    }
};

