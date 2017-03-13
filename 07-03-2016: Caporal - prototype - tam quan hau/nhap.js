/**
 * File: NQueens.js
 * Author: Brian Borowski
 * Date created: November 15, 2002
 * Date last modified: February 12, 2011
 */
function NQueens() {
    // Private Member Variables
    var size = 8;   // default to 8-Queens
    var numOfSolutions, currentSolution;
    var solutions = null;
    var time = 0;
    var imgQueen = new Image();
    var a, b, c, x;

    // Public Method Pointers
    this.setBoardSize = setBoardSize;
    this.gotoBeginning = gotoBeginning;
    this.gotoEnd = gotoEnd;
    this.goBack = goBack;
    this.goForward = goForward;
    this.clear = clear;
    this.solve = solve;
    this.displayPosition = displayPosition;
    this.displayElapsedTime = displayElapsedTime;
    this.drawBoard = drawBoard;

    // Initialization
    imgQueen.src = "./Images/queen.gif";


    // ********************** Public Methods *********************** //
    function setBoardSize(sz) {
        size = parseInt(sz);
    }

    function getNumOfSolutions() {
        return numOfSolutions;
    }

    function gotoBeginning() {
        currentSolution = 1;
    }

    function gotoEnd() {
        currentSolution = numOfSolutions;
    }

    function goBack() {
        if (currentSolution > 1) {
            currentSolution--;
        }
    }

    function goForward() {
        if (currentSolution < numOfSolutions) {
            currentSolution++;
        }
    }

    function clear() {
        solutions = null;
    }

    function solve() {
        time = new Date();
        numOfSolutions = 0;
        gotoBeginning();
        solutions = new Array();
        a = new Array();
        b = new Array();
        c = new Array();
        x = new Array();
        for (var i = 1; i <= size; i++) {
            a[i] = true;
            x[i] = 0;
        }
        for (var i = 2; i <= 2*size; i++) {
            b[i] = true;
        }
        for (var i = 1-size; i <= size-1; i++) {
            c[i] = true;
        }
        tryConfig(1);
        // time = (new Date() - time)/1000;
    }

    function displayPosition() {
        writeToLayer("position", getPosition());
    }

    function displayElapsedTime() {
        writeToLayer("time", time + " s");
    }

    function drawBoard() {
        var sTable;
        sTable = "<table id=\"checkerboard\">";
        for (var row = 1; row <= size; row++) {
            var sRow = "<tr>";
            for (var col = 1; col <= size; col++) {
                if (row % 2 == col % 2) {
                    sRow += "<td class=\"altcolor\">";
                } else {
                    sRow += "<td>";
                }
                if (solutions != null &&
                    solutions[currentSolution][row] == col) {
                    sRow += "<div style=\"width:21px; height:21px\">" +
                        "<img src=\"" + imgQueen.src +
                        "\" width=\"21\" height=\"21\" /></div></td>";
                } else {
                    sRow += "<div style=\"width:21px; height:21px\" /></td>";
                }
            }
            sRow += "</tr>";
            sTable += sRow;
        }
        sTable += "</table>";
        writeToLayer("board", sTable);
    }
    // ******************** End Public Methods ********************* //


    // ********************** Private Methods ********************** //
    /***
     *
     * @param orig
     * @returns {Array}
     */
    function copyArray(orig) {
        var copy = new Array();
        for (var i = 1; i < orig.length; i++) {
            copy[i] = orig[i];
        }
        return copy;
    }

    /***
     *
     * @param i
     */
    function tryConfig(i) {
        for (var j = 1; j <= size; j++) {
            if (a[j] && b[i+j] && c[i-j]) { // if safe then
                x[i] = j;                   // select jth candidate;
                a[j] = false;               // set queen; (next three lines)
                b[i+j] = false;
                c[i-j] = false;
                if (i < size) {             // if i < n then
                    tryConfig(i+1);         // tryConfig(i+1);
                } else {                    // else
                    ++numOfSolutions;       // record solution;
                    solutions[numOfSolutions] = copyArray(x);
                }
                a[j] = true;                // remove queen; (next three lines)
                b[i+j] = true;
                c[i-j] = true;
            }
        }
    }

    function getPosition() {
        return currentSolution + " of " + numOfSolutions;
    }

    /***
     *
     * @param a
     * @param label
     * @returns {*}
     */
    function arrayToString(a, label) {
        var strArray;
        if (label == null) {
            strArray = "[";
        } else {
            strArray = label + " [";
        }
        for (var i = 1; i < a.length; i++) {
            strArray += a[i];
            if (i == a.length-1) {
                strArray += "]";
            } else {
                strArray += ", ";
            }
        }
        return strArray;
    }
    // ******************** End Private Methods ******************** //
}
