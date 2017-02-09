/**
 * Created by phambaonam on 08/02/2017.
 */

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

    let delta = b * b - 4 * a * c;
    let can_bac_hai = Math.sqrt;

    if (delta < 0) {
        throw new Error('the equation has no solution');
    }

    let x1 = (-b + can_bac_hai(delta)) / (2 * a);
    let x2 = (-b - can_bac_hai(delta)) / (2 * a);

    if (delta > 0) {
        return [x1, x2];
    } else {
        return [x1, x2];
    }
};

