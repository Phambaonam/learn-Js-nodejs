// /**
//  * Created by phambaonam on 09/03/2017.
//  */
//
// 1:queenPuzzle(4,4)->addQueen(3,4)->queenPuzzle(3,4)
//   -> addQueen(2,4)->queenPuzzle(2,4)
//   -> addQueen(1,4)->queenPuzzle(1,4)
//   -> addQueen(0,4)->queenPuzzle(0,4)->[[]]
// 2:
// pre = [[]], pre.length = 1, newRow = 0, columns =4;
// for: i = 0 , pre[0] = []
//     -> for:  newColumn = 0, newColumn < 4
//          ->if: hasConflict(newRow=0,newColumn=0,solution=[]);
//           hasConflict(newRow=0,newColumn=0,solution=[]);
//           for: