
/*
 * Giải phương trình bậc 2.
 * @param a
 * @param b
 * @param c
 * @returns {Array}: return về nghiệm của phương trình.
 */
exports.quadratic = (a, b, c) => {

    if (a == 0) {
        throw new Error('Input a is invalid');
    }
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        throw new Error('the equation has no solution');
    }
    let can_bac_hai = Math.sqrt(delta);

    return [(-b + can_bac_hai) / (2 * a), (-b - can_bac_hai) / (2 * a)];
};