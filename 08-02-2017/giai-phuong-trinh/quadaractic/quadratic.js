/**
 * Created by phambaonam on 08/02/2017.
 */

/*
 * phuong trinh bac 2 gom 3 tham so a,b,c.
 * a phai khac 0,
 * tinh he so delta,
 * phuong trinh co: vo nghiem, 2 nghiem phan biet, 1 nghiem kep
 * */

let result = [], x1, x2, x;

exports.quadratic = (a, b, c) => {

    if (a == 0) {
        throw new Error('Input a is invalid');
    }

    let delta = b * b - 4 * a * c;

    x1 = (-b + Math.sqrt(delta)) / (2 * a);

    x2 = (-b - Math.sqrt(delta)) / (2 * a);

    x = Math.abs(b) / (2 * a);

    return delta;

};

exports.checkResult = (delta) => {
    if (delta > 0) {

        result.push(x1, x2);

        return result;

    } else if (delta == 0) {

        result.push(x);

        return result;

    } else {
        throw new Error('the equation has no solution')
    }
};

