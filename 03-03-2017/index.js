/**
 * Created by phambaonam on 03/03/2017.
 */

chessboard = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr.push([i, j]);
            if (i == 0 && j < n) {
                arr.slice(j);
                arr;
            }
        }
    }

    console.log(arr);
};
chessboard(4);