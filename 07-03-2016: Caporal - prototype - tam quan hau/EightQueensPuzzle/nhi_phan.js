/**
 * Created by phambaonam on 09/03/2017.
 */

const max = 30;
let x = [];
let n = 3;
function PrintResult() {
    for (let i = 1; i < n-1; i++) {
        console.log(x);
        // return x;
    }
}

function Try(i) {
    for (let j = 0; j <= 1; j++) {
        x[i - 1] = j;
        if (i == n) {
             PrintResult();
        } else {
              Try(i + 1);
        }
    }
}

console.log(Try(1));