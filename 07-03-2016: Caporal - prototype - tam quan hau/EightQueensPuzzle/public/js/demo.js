/**
 * Created by phambaonam on 10/03/2017.
 */




// let draw = Snap("#Snap");
let width = 800;
let heigth = 800;
let draw = Snap(width, heigth);
let boxSize = width / 8;
let y = 0;
// let number = function getNumber(n) {
//     return n;
// };
// let number = Number(prompt('Nhập vào n:'));

let pieces = {
    NONE: {
        name: "None",
        code: " "
    },
    TEAM1_KING: {
        name: "White King",
        code: "\u2654"
    },
    TEAM1_QUEEN: {
        name: "White Queen",
        code: "\u2655"
    },
    TEAM1_ROOK: {
        name: "White Rook",
        code: "\u2656"
    },
    TEAM1_BISHOP: {
        name: "White Bishop",
        code: "\u2657"
    },
    TEAM1_KNIGHT: {
        name: "White Knight",
        code: "\u2658"
    },
    TEAM1_POWN: {
        name: "White Pown",
        code: "\u265F"
    },
    TEAM2_KING: {
        name: "Black King",
        code: "\u265A"
    },
    TEAM2_QUEEN: {
        name: "Black Queen",
        code: "\u265B"
    },
    TEAM2_ROOK: {
        name: "Black Rook",
        code: "\u265C"
    },
    TEAM2_BISHOP: {
        name: "Black Bishop",
        code: "\u265D"
    },
    TEAM2_KNIGHT: {
        name: "Black Knight",
        code: "\u265E"
    },
    TEAM2_POWN: {
        name: "Black Pown",
        code: "\u265F"
    },
};

let chess1 = [pieces.TEAM1_ROOK, pieces.TEAM1_KNIGHT, pieces.TEAM1_BISHOP, pieces.TEAM1_QUEEN, pieces.TEAM1_KING,
    pieces.TEAM1_BISHOP, pieces.TEAM1_KNIGHT, pieces.TEAM1_ROOK, pieces.TEAM1_POWN
];

let chess2 = [pieces.TEAM2_ROOK, pieces.TEAM2_KNIGHT, pieces.TEAM2_BISHOP, pieces.TEAM2_QUEEN, pieces.TEAM2_KING,
    pieces.TEAM2_BISHOP, pieces.TEAM2_KNIGHT, pieces.TEAM2_ROOK, pieces.TEAM2_POWN
];

function queenPuzzle(rows, columns) {
    if (rows <= 0) {
        return [
            []
        ];
    } else {
        return addQueen(rows - 1, columns);
    }
}

function addQueen(newRow, columns) {
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
        if (solution[i] == newColumn ||
            solution[i] + i == newColumn + newRow ||
            solution[i] - i == newColumn - newRow) {
            return true;
        }
    }
    return false;
}


// let solution = queenPuzzle(number, number);

function drawBoard(number, solution) {
    for (i = 0; i < number; i++) {
        let x = 0;
        for (j = 0; j < number; j++) {
            //draw board
            if ((i + j) % 2 === 0) {
                let chessboard = draw.rect(j * boxSize, i * boxSize, boxSize, boxSize);
                chessboard.attr({
                    fill: '#4D8761'
                });
            } else {
                let chessboard = draw.rect(j * boxSize, i * boxSize, boxSize, boxSize);
                chessboard.attr({
                    fill: '#522C12'
                });
            }
            // draw chess
            if (i == solution[1][j]) {
                console.log(solution);
                let chess = draw.text(x + 50, y + 90, chess1[3].code);
                chess.attr({
                    "font-size": "100px",
                    "text-anchor": "middle",
                })
            }

            x += boxSize;
        }
        y += boxSize;
    }
}

$(document).ready(function () {
    $("#button").click(function () {
        let n = $("#text").val();
        let number = Number(n);
        let solution = queenPuzzle(number, number);
        drawBoard(number, solution);
    }).load("/demo.html");
});

// let solution = queenPuzzle(number, number);
// drawBoard(number, solution);