/**
 * Created by phambaonam on 08/02/2017.
 */

/*
 * phuong trinh bac 2 gom 3 tham so a,b,c.
 * a phai khac 0,
 * tinh he so delta,
 * phuong trinh co: vo nghiem, 2 nghiem phan biet, 1 nghiem kep
 * */

exports.quadratic = (a, b, c) => {
    if (a == 0) {
        throw new Error('Input a is invalid');
    }

    let delta = b * b - 4 * a * c;

    if (delta > 0) {
        return 'phuong trinh co 2 nghiem phan biet la: ' + 'x1 = ' + (-b + Math.sqrt(delta)) / (2 * a) + ', ' + 'x2 = ' + (-b - Math.sqrt(delta)) / (2 * a);
    } else if (delta == 0) {
        return 'phuong trinh co nghiem kep la: x1 = x2 = ' + Math.abs(b) / (2 * a);
    } else {
        return 'phuong trinh vo nghiem';
    }
};
