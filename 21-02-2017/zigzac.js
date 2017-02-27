/**
 * Created by phambaonam on 21/02/2017.
 */

let zigzag = (m, n) => {
    let result = '';
    let temp1 = 0;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= m * n - (n - 1); j++) {
            // || (i + j) == (m + 1) || j == (m + 1) / 2 || || j == (m + 1) / 2 || j == m / 2
            // i == 1 || i == m || j == 1 || j == m * n - (n - 1)
            if (i <= m && i + j == m + n * n) {
                result += '* ';
            } else {
                result += '- ';
            }
        }
        if (i == 1) {
            temp1 = result.length;
        }
        let step = result.length;
        if (step > temp1) {
            console.log(result.slice(temp1 * (i - 1), step));
        } else {
            console.log(result);
        }
        // break
    }
};
zigzag(5, 2);



