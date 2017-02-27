/**
 * Created by phambaonam on 22/02/2017.
 */

class draw {

    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
    }

    /***
     * vẽ chữ X
     * @param rowIndex
     * @param colIndex
     * @param rows
     * @param cols
     * @returns {boolean}
     */
    drawX(rowIndex, colIndex, rows, cols) {
        let temp = 1;
        return (rowIndex == colIndex || rowIndex + colIndex == rows + temp);
    }

    /***
     * chỉ vẽ được 1 hình
     * @param rowIndex
     * @param colIndex
     * @param rows
     * @param cols
     * @returns {boolean}
     */
    drawRhombus(rowIndex, colIndex, rows, cols) {
        let thick = 1;
        let temp = (cols + 1) / 2;   //8
        return (
            colIndex == temp - rowIndex + thick || colIndex == temp + rowIndex - thick
            || colIndex == rowIndex - temp + thick || colIndex == cols + temp - rowIndex
        );
    }

    /***
     * hình vuông lồng hình thoi
     * @param rowIndex
     * @param colIndex
     * @param rows
     * @param cols
     * @returns {boolean}
     */
    drawRhombus_rectangle(rowIndex, colIndex, rows, cols) {
        let temp = 1;
        return (
            rowIndex + colIndex == (rows + temp) / 2 + 1 ||
            rowIndex + (rows + temp) / 2 - 1 == colIndex || rowIndex - ((rows + temp) / 2 - 1) == colIndex ||
            rowIndex + colIndex - ((rows + temp) / 2 - 1) == rows + temp) ||
            rowIndex == rows || colIndex == cols || colIndex == 1 || rowIndex == 1
    }

    /***
     *  code này chưa vẽ được line by line
     * @param rowIndex
     * @param colIndex
     * @param rows
     * @param cols
     * @returns {boolean}
     */
    drawFly(rowIndex, colIndex, rows, cols) {
        return (
            // colIndex > rowIndex && colIndex <= cols - rowIndex
            // || rowIndex > colIndex && colIndex >= cols - rowIndex + 2
            rowIndex >= colIndex && rowIndex + colIndex <= cols + 1 // vẽ bên trái
            || colIndex >= rowIndex && colIndex > cols - rowIndex   // vẽ bên ph
        );
    }

    /***
     *
     * @param rowIndex
     * @param colIndex
     * @param rows
     * @param cols
     * @returns {boolean}
     */
    drawM(rowIndex, colIndex, rows, cols) {
        let temp = (rows + 1) / 2;
        return (
            colIndex == 1 || colIndex == rows
            || rowIndex == colIndex && rowIndex <= temp
            || rowIndex + colIndex == cols + 1 && rowIndex <= temp
        );
    }

    // drawCross(rowIndex, colIndex, rows, cols) {
    //     return (
    //
    //
    //     );
    // }

    drawZigZac(rowIndex, colIndex, rows, cols) {
        let num = 3;
        if (num % 2 == 0) {
            return (
                colIndex + rowIndex == (cols / 2 + num - 1)
                || colIndex == rowIndex + rows - num + 1
            );
        } else {
            return (
                rowIndex + colIndex == cols + 1
                || rowIndex + colIndex == rows + 1

            );
        }
    }


    /***
     * bên trong hàm này gọi đến 1 hàm khác, thực chất là tách for ra
     * @param rowIndex
     * @param cols
     * @param drawFunction
     */
    drawLine(rowIndex, cols, drawFunction) {
        let str = '';
        for (let colIndex = 1; colIndex <= cols; colIndex++) {
            str = str.concat(drawFunction(rowIndex, colIndex, this.rows, this.cols) ? ' * ' : '   ');
            // if (drawFunction(rowIndex, colIndex, this.rows, this.cols)) {
            //      str += '* ';
            // } else {
            //      str += '  ';
            // }
        }
        return str;
    }

    drawEverything() {
        for (let i = 1; i <= this.rows; i++) {
            console.log(this.drawLine(i, this.cols, this.drawZigZac));
        }
    }
}

/*
 function demo(m, n) {
 let str = '';
 for (let i = 1; i <= m; i++) { // drawEverything()
 for (let j = 1; j <= n; j++) {// drawLine()
 if (i == j || i + j == n + n) { // drawX(i,j,m,n)
 str += '* ';
 } else {
 str += ' ';
 }
 }
 }
 }
 */

let mydraw = new draw(7, 21);
mydraw.drawEverything();
