" use strict ";

var display = document.getElementById("display");

function yourFunctionName() {
    display.innerHTML = "hello";
}


function oneToTen() {
    var header = "oneToTen()<br>***Output***";
    var counter = "";
    for (var i = 1; i <= 10; i++) {
        counter += i + "<br>";
    }
    display.innerHTML = header + "<br>" + counter;
}


function oddNumbers() {
    var header = "oddNumbers()<br>***Output***";
    var counter = "";
    for (var i = 1; i <= 20; i = i + 2) {
        counter += i + "<br>";
    }
    display.innerHTML = header + "<br>" + counter;
}


function squareNumbers() {
    var header = "squareNumbers()<br>***Output***";
    var counter = "";
    for (var i = 1; i <= 10; i++) {
        counter += Math.pow(i, 2) + "<br>";
    }
    display.innerHTML = header + "<br>" + counter;
}


function randomNumbers() {
    var header = "randomNumbers()<br>***Output***";
    var counter = "";
    for (var i = 1; i <= 4; i++) {
        counter += Math.floor(Math.random() * 100 + 1) + "<br>";
    }
    display.innerHTML = header + "<br>" + counter;
}


function evenNumbers(n) {
    var header = "evenNumbers()<br>***Output***";
    var counter = "";

    for (var i = 2; i < n; i = i + 2) {
        counter += i + "<br>";
    }
    display.innerHTML = header + "<br>" + counter;
}


function powersOfTwo() {
    var header = "***Output***";
    var counter = "";
    var n = 9;
    for (var i = 1; i < n; i++) {
        counter += Math.pow(2, i) + "<br>";
    }
    display.innerHTML = header + "<br>" + counter;
}

function arewethereyet() {
    var answer = prompt("Are we there yet?");
    var emptyString = "";
    while (answer.toLowerCase() !== 'yes') {
        answer = prompt("Are we there yet?");
        emptyString += "Are we there yet?<br>" + answer + "<br>";
    }
    display.innerHTML = emptyString;

}

function triangle() {
    var header = "***Output***";
    var completedTriangle = "";
    var star = "*";
    var newTriangle = "";

    for (var i = 1; i < 5; i++) {
        for (var j = 1; j < i; j++) {
            newTriangle += star;
            if (j == 3) {
                break;
            }
            completedTriangle += "<br>" + newTriangle;
        }
    }
    display.innerHTML = header + completedTriangle;
}

function tableSquare() {
    var header = "tableSquare()<br>*** Output ***<br>";
    var addToTable = "";
    var count = 0;
    var lengthSize = getLengthOfString(4);

    for (var i = 0, m = 1; i < 4; i++, m++) {
        for (var j = 0, k = 1; j < 4; j++, k++) {

            if (i == count) {
                addToTable += spacer(k, m, lengthSize) + k * m + "&nbsp|";
            }
        }
        if (i != 4 - 1) {
            addToTable += "<br>|";
        }
        count++;
    }

    display.innerHTML = header + "|" + addToTable;
}

function tableSquares(n) {
    var header = "tableSquares()<br>*** Output ***<br>";
    var addValueToTable = "";
    var count = 0;
    var lengthSize = getLengthOfString(n);

    for (var i = 0, m = 1; i < n; i++, m++) {
        for (var j = 0, k = 1; j < n; j++, k++) {

            if (i == count) {
                addValueToTable += spacer(k, m, lengthSize) + k * m + "&nbsp;|";
            }
        }
        if (i != n - 1) {
            addValueToTable += "<br>|";
        }
        count++;
    }

    display.innerHTML = header + "|" + addValueToTable
}

function spacer(k, m, lengthSize) {
    var addSpaces = "&nbsp";
    var f = k * m;
    var lengthOfNum = f.toString();
    var g = lengthOfNum.length;

    for (var i = lengthSize; i > g; i--) {
        addSpaces += "&nbsp;&nbsp"; // need extra in javascript
    }

    return addSpaces;
}

function getLengthOfString(n) {
    var a = 0;
    for (var i = 0, m = 1; i < n; i++, m++) {
        for (var j = 0, k = 1; j < n; j++, k++) {
            a = k * m;
        }
    }
    var lengthOfNum = a.toString();
    var lengthOfSum = lengthOfNum.length;
    return lengthOfSum;
}
