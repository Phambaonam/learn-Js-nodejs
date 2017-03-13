let size = 8;   // default to 8-Queens
let numOfSolutions, currentSolution;
let solutions = [];
let a = [], b = [], c = [], x = [];


function solve() {
    numOfSolutions = 0;
    for (let i = 1; i <= size; i++) {
        a[i] = true;
        x[i] = 0;
    }
    for (let i = 2; i <= 2 * size; i++) {
        b[i] = true;
    }
    for (let i = 1 - size; i <= size - 1; i++) {
        c[i] = true;
    }
    tryConfig(1);
}


function copyArray(orig) {
    let copy = [];
    for (let i = 1; i < orig.length; i++) {
        copy[i] = orig[i];
    }
    return copy;
}

function tryConfig(i) {
    for (let j = 1; j <= size; j++) {
        if (a[j] && b[i + j] && c[i - j]) { // if safe then
            x[i] = j;                   // select jth candidate;
            a[j] = false;               // set queen; (next three lines)
            b[i + j] = false;
            c[i - j] = false;
            if (i < size) {             // if i < n then
                tryConfig(i + 1);         // tryConfig(i+1);
            } else {                    // else
                ++numOfSolutions;       // record solution;
                solutions[numOfSolutions] = copyArray(x);
            }
            a[j] = true;                // remove queen; (next three lines)
            b[i + j] = true;
            c[i - j] = true;
        }
    }
}

console.log(solve());