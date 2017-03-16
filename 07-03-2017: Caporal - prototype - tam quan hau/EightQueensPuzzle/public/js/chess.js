/**
 * Created by phambaonam on 07/03/2017.
 */
let width = 800;
let heigth = 800;
let boxSize = 50;


let draw = Snap(width,heigth);

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

    NONE: {
        name: "None",
        code: " "
    }
};

let chess1 = [pieces.TEAM1_ROOK, pieces.TEAM1_KNIGHT, pieces.TEAM1_BISHOP, pieces.TEAM1_QUEEN, pieces.TEAM1_KING,
    pieces.TEAM1_BISHOP, pieces.TEAM1_KNIGHT, pieces.TEAM1_ROOK, pieces.TEAM1_POWN
];

let chess2 = [pieces.TEAM2_ROOK, pieces.TEAM2_KNIGHT, pieces.TEAM2_BISHOP, pieces.TEAM2_QUEEN, pieces.TEAM2_KING,
    pieces.TEAM2_BISHOP, pieces.TEAM2_KNIGHT, pieces.TEAM2_ROOK, pieces.TEAM2_POWN
];

/* logic 
 //i ==0
 //j        //i  
 let square0 = draw.rect(0*boxSize, 0*boxSize,boxSize, boxSize);
 square0.attr({fill:'red'})

 let square1 = draw.rect(1*boxSize, 0*boxSize,boxSize, boxSize);
 square1.attr({fill:'green'})

 let square2 = draw.rect(2*boxSize, 0*boxSize,boxSize, boxSize);
 square2.attr({fill:'red'})

 // i == 1
 //j      //i 
 let square3 = draw.rect(0*boxSize, 1*boxSize,boxSize, boxSize);
 square3.attr({fill:'green'})

 let square4 = draw.rect(1*boxSize, 1*boxSize,boxSize, boxSize);
 square4.attr({fill:'red'})

 let square5 = draw.rect(2*boxSize, 1*boxSize,boxSize, boxSize);
 square5.attr({fill:'green'})
 // x   y     message
 let chess = draw.text(105, 35, chess2[0].code);
 chess.attr({fill:'gold','text-anchor':'middle'}); */

//  let ches =  draw.text(boxSize/2*(j*2+1), boxSize*i+ boxSize/(3)*2, pieces.NONE.code);

let start = function(e){
}
let moving = function(dx,dy){
    let curX = parseInt(this.data('chessX')) + dx;
    let curY = parseInt(this.data('chessY')) + dy;

    this.attr({
        x : curX,
        y : curY
    });
}
let stop = function(){


    this.data('chessX',this.attr('x'));
    this.data('chessY',this.attr('y'));
}

let append = function(e){
    draw.append(e.target);
}

for (let i =0 ; i < 8; i++) {
    for (let j = 0; j < 8; j++) {

        // draw chessboard
        if ((i + j) % 2 === 0) {
            let chessboard = draw.rect(j*boxSize, i*boxSize,boxSize, boxSize);
            chessboard.attr({fill:'#4D8761'});
        } else {
            let chessboard = draw.rect(j*boxSize, i*boxSize,boxSize, boxSize);
            chessboard.attr({fill:'#522C12'});
        }
        //end
        let chess;
        // draw chess 
        if (i === 0) {
            chess = draw.text(boxSize/2*(j*2+1), boxSize*i + boxSize/(3)*2, chess2[j].code);
            chess.attr({'fill':'#E4E4D8','text-anchor':'middle','font-size':boxSize/2});
        }

        if (i === 1) {
            chess = draw.text(boxSize/2*(j*2+1), boxSize + boxSize/(3)*2, chess2[8].code);
            chess.attr({'fill':'#E4E4D8','text-anchor':'middle','font-size':boxSize/2});
        }

        if (i === 6) {
            chess = draw.text(boxSize/2*(j*2+1), boxSize*i + boxSize/(3)*2, chess1[8].code);
            chess.attr({'fill':'#10120F','text-anchor':'middle','font-size':boxSize/2});
        }

        if (i === 7) {
            chess = draw.text(boxSize/2*(j*2+1), boxSize*i + boxSize/(3)*2, chess1[j].code);
            chess.attr({'fill':'#10120F','text-anchor':'middle','font-size':boxSize/2});
        }
        // end

        // move 
        chess.mousedown(append);
        chess.data('chessX',chess.attr('x'));
        chess.data('chessY',chess.attr('y'));
        chess.drag(moving,start,stop);
    }
}
