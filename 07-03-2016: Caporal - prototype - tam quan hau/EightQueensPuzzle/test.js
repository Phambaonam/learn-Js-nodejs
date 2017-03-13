/**
 * Created by phambaonam on 09/03/2017.
 */

function queenPuzzle(rows, columns) {
    if (rows <= 0) {
        return [[]];
    } else {
        return addQueen(rows - 1, columns);
    }
}

function addQueen(newRow, columns, prevSolution) {
    let newSolutions = [];
    let prev = queenPuzzle(newRow, columns);
    for (let i = 0; i < prev.length; i++) {
        let solution = prev[i];
        for (let newColumn = 0; newColumn < columns; newColumn++) {
            if (!hasConflict(newRow, newColumn, solution))
                newSolutions.push(solution.concat([newColumn]))
        }
    }
    return newSolutions;
}

function hasConflict(newRow, newColumn, solution) {
    for (let i = 0; i < newRow; i++) {
        if (solution[i]     == newColumn          ||
            solution[i] + i == newColumn + newRow ||
            solution[i] - i == newColumn - newRow) {
            return true;
        }
    }
    return false;
}

console.log(queenPuzzle(12,12).length);


// cach chuyen doi for() sang su dung function
for(let k =1;k<10;k++){
    dosomething();
}

let k =1;

function next() {
    if(k<10){
        k++;
        dosomething();
    }
}