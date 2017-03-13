/**
 * Created by phambaonam on 09/03/2017.
 */
/***
 *  khống chế xếp quân hậu theo
 * @param rows
 * @param columns
 * @returns {*}
 */
function queenPuzzle(rows, columns) {
    if (rows <= 0) {
        return [[]];
    } else {
        return addQueen(rows - 1, columns);
    }
}

/***
 *
 * @param newRow
 * @param columns
 * @returns {Array}
 */
function addQueen(newRow, columns) {
    // lấy ra các vị trí có thể xếp quân hậu
    let newSolutions = [];

    let prev = queenPuzzle(newRow, columns);

    console.log(prev);
    console.log(prev.length);

    for (let i = 0; i < prev.length; i++) {

        let solution = prev[i];
        console.log(solution);
        for (let newColumn = 0; newColumn < columns; newColumn++) {

            if (!hasConflict(newRow, newColumn, solution)){
                console.log(solution.concat([newColumn]));
                newSolutions.push(solution.concat([newColumn]));
            }

        }
        console.log(newSolutions);
    }
    console.log(newSolutions);
    return newSolutions;
}

/***
 * hàm này để kiêm tra ví trí các
 * @param newRow
 * @param newColumn
 * @param solution
 * @returns {boolean}
 */
function hasConflict(newRow, newColumn, solution) {
    for (let i = 0; i < newRow; i++) {
        console.log(solution[i]);
        console.log(solution[i] + i);
        console.log(solution[i] - i);
        if (solution[i] == newColumn ||
            solution[i] + i == newColumn + newRow ||
            solution[i] - i == newColumn - newRow) {
            return true;
        }
    }
    return false;
}

console.log(queenPuzzle(4, 4));
