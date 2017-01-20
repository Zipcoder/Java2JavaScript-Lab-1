" use strict ";

var display = document.getElementById("display");

function oneToTen () {
    for (var i = 1; i < 11; i++) {
        display.innerHTML += i + '<br>';
    }
}

function oddNumbers () {
    for (var i = 1; i < 20; i++) {
        if (i % 2 !== 0) {
          display.innerHTML += i + '<br>';
        }
    }
}

function squares () {
    var squaredNumber = 1, counter = 1;
    while (squaredNumber < 101) {
        display.innerHTML += squaredNumber + '<br>';
        counter ++;
        squaredNumber = counter * counter;
    }
}

function random4 () {
    var random, randomInt;
    for (var i = 1; i < 5; i++) {
        random = Math.random() * 100;
        randomInt = Math.round(random);
        display.innerHTML += randomInt + '<br>';
    }
}

function even (n) {
    for (var i = 1; i < n; i++) {
        if (i % 2 === 0) {
            display.innerHTML += i + '<br>';
        }
    }
}

function powers (n) {
    for (var i = 1; i <= n; i++) {
        display.innerHTML += Math.pow(2,i) + '<br>';
    }
}

function annoying () {
  var answer;
  do {
        answer = prompt("Arewethereyet?");
        display.innerHTML += answer + '<br>';
  }
  while (answer !== "Yes")
    display.innerHTML += "Good";
}

//String.prototype.Repeat could solve this without the use of a nested loop
function triangle () {
  var line = "";
  for (var i = 1; i < 6; i++) {
    for (var j = i; j < 6; j++) {
      line += "*";
      break;
    }
    display.innerHTML += line + '<br>';
  }
}

function tableSquare () {
  for (var i = 1; i < 5; i++) {
    for (var j = i; j < 5; j++) {
      display.innerHTML += (j + "|") + (j * 2 + "|") + (j * 3 + "|") + (j * 4 + "|") + '<br>';
      break;
    }
  }
}

function tableSquares (n) {
  var currentResult;
  for (var i = 1; i <= n; i++) {
      var string = "";
     for (var j = 1; j <= n; j++) {
       currentResult = i * j;
       string += currentResult + " | ";
     }
        display.innerHTML += string + '<br>';
  }
}

function reset () {
  display.innerHTML = "";
}
