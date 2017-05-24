" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}

function printOneToTen() {
  var result = "";
  for (var i = 0; i < 10; i++) {
    result += i + 1 + "<br/>";
  }
  display.innerHTML = result;
}

function printOddNumbers() {
  var result = "";
  for (var i = 1; i < 20; i += 2) {
    result += i + "<br/>";
  }
  display.innerHTML = result;
}

function printSquaresToOneHundred() {
  var result = "";
  for (var i = 1; i < 10; i++) {
    if (i * i < 100) {
      result += i * i + "<br/>";
    }
  }
  display.innerHTML = result;
}

function randomFour() {
  var result = "";
  for (var i = 0; i < 4; i++) {
    var rando = Math.floor((Math.random() * 100) + 1);
    result += rando + "<br/>";
  }
  display.innerHTML = result;
}

function evenLessThanN(n) {
  var result = "";
  for (var i = 2; i < n; i++) {
    if (i % 2 == 0) {
      result += i + "<br/>";
    }
  }
  display.innerHTML = result;
}

function powersOfTwo(n) {
  var result = "";
  for (var i = 1; i <= n; i++) {
    result += 2 ** i + "<br/>";
  }
  display.innerHTML = result;
}

function areWeThereYet() {
  do {
    var answer = prompt("Arewethereyet?")
  } while (answer != "Yes");
  display.innerHTML = "Good!";
}

function triangle() {
  var symbol = "*";
  var result = "";
  for (var i = 0; i < 5; i++) {
    result += symbol + "<br/>";
    symbol += "*";
  }
  display.innerHTML = result;
}

function tableSquare() {
  var result = "|";
  for (var i = 1; i < 5; i++) {
    for (var j = 1; j < 5; j++) {
      result += i * j + "|";
    }
    if (i != 4) {
      result += "<br/>|";
    }
    else {
      result += "<br/>";
    }
  }
  display.innerHTML = result;
}

function extendedTableSquare(n) {
  var result = "|";
  for (var i = 1; i < n + 1; i++) {
    for (var j = 1; j < n + 1; j++) {
      result += i * j + "|";
    }
    if (i != n) {
      result += "<br/>|";
    }
    else {
      result += "<br/>";
    }
  }
  display.innerHTML = result;
}
