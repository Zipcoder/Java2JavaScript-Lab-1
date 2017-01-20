" use strict ";

var display = document.getElementById("display");
var newline ="<br />";

function oneToTen() {

  display.innerHTML = "";

  var result = "oneToTen()" + newline;
  result += "***Output***" + newline;

  for ( var i = 1; i <= 10; i++ ) {
    result += i + newline;

  }

  display.innerHTML = result;
}

function oddNumbers() {

  display.innerHTML = "";

  var result = "oddNumbers()" + newline;
  result += "***Output***" + newline;

  for ( var i = 1; i <= 19; i += 2) {
    result += i + newline;
  }

  display.innerHTML = result;
}

function squares() {

  display.innerHTML = "";

  var result = "squares()" + newline;
  result += "***Output***" + newline;

  for ( var i = 1; i <= 10; i++ ) {
    result += (i*i) + newline;
  }

  display.innerHTML = result;
}

function random4() {

  display.innerHTML = "";

  var result = "random4()" + newline;
  result += "***Output***" + newline;

  for ( var i = 0; i < 4; i++ ){
    // generates random numbers between 1 and just under 101, then takes the floor
    var randomNumber = Math.floor((Math.random() * 100) + 1);
    result += randomNumber + newline;
  }

  display.innerHTML = result;
}

function even(n) {

  display.innerHTML = "";

  var result = "even(" + n + ")" + newline;
  result += "***Output***";

  for ( var i = 2; i < n; i += 2) {
    result += i + newline;
  }

  display.innerHTML = result;
}

function powers(n) {

  display.innerHTML = "";

  var result = "powers(" + n + ")" + newline;
  result += "***Output***";

  for ( var i = 1; i <= n; i++ ) {
    result += Math.pow(2, i) + newline;
  }

  display.innerHTML = result;
}

function areWeThereYet() {

    display.innerHTML = "";

    do {
        var areWeThereYet = "Arewethereyet" + newline;

        display.innerHTML = areWeThereYet;

        var input = prompt("Are We There Yet?", "Yes");

        display.innerHTML += input + newline;

     } while (input !== "Yes");

    display.innerHTML += "Good!";
}

function triangle() {

  display.innerHTML = "";

  var result = "triangle()" + newline;
  result += "***Output***" + newline;

  for ( var i = 1; i <= 5; i++ ) {
    for ( var j = 1; j <= i; j++ ) {
      result += "*"
    }
    result += newline;
  }

  display.innerHTML = result;
}

function tableSquare() {

  display.innerHTML = "";

  var result = "tableSquare()" + newline;
  result += "***Output***" + newline;
  result += "A4x4tablesquare" + newline;

  for ( var i = 1; i <= 4; i++ ) {

      result += "|";

      for ( var j = 1; j <= 4; j++ ) {

      var iTimesJ = i * j;

      // handle the extra space before 3, 4, 6, 8, 9
      if ( j > 2 && iTimesJ < 10 ) {
        result += " " + iTimesJ + "|";
      }
      else {
        result += iTimesJ + "|";
      }
    }

    result += newline;
  }

  display.innerHTML = result;
}

function tableSquares(n) {

  display.innerHTML = "";

  var result = "tableSquares(" + n + ")" + newline;
  result += "***Output***" + newline;
  result += "A6x6tablesquare" + newline;

  for ( var i = 1; i <= n; i++ ) {

    result += "|";

    for ( var j = 1; j <= n; j++ ) {

      var iTimesJ = i * j;

      if ( iTimesJ < 10 ) {
        /* needed to use the non breaking space to prevent condensation of whitespace...
           answer found at http://stackoverflow.com/questions/9046113/disable-auto-trimming-of-text-by-p-tag
         */
        result += "&nbsp;" + "&nbsp;" + iTimesJ + " |";
      }
      else {
        result += " " + iTimesJ + " |";
      }
    }

    result += newline;
  }

  display.innerHTML = result;
}
