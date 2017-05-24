" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}

function oneToTen () {
  var returnedString = "<div>" + 1 + "</div>";
  for (var i = 2; i < 11; i++) {
    returnedString += "<div>" + i + "</div>";
  }
  display.innerHTML = returnedString;
}

function oddNumbers () {
  var returnedString = "<div>" + 1 + "</div>";
  for (var i = 2; i < 20; i++) {
    if (i % 2 !== 0) {
      returnedString += "<div>" + i + "</div>";
    }
  }
  display.innerHTML = returnedString;
}

function squares () {
  var returnedString = "<div>" + 1 + "</div>";
  for (var i = 2; i < 11; i++) {
    returnedString += "<div>" + (i*i) + "</div>";
  }
  display.innerHTML = returnedString;
}

function random4 () {
  var returnedString = "";
  for (var i = 1; i < 5; i++) {
    returnedString += "<div>" + Math.ceil(Math.random()*100) + "<div>";
  }
  display.innerHTML = returnedString;
}

function even (number) {
  var returnedString = "";
  for (var i = 1; i < number; i++) {
    if (i % 2 === 0) {
      returnedString += "<div>" + i + "<div>";
    }
  }
  display.innerHTML = returnedString;
}

function powers (number) {
  var returnedString = "";
  for (var i = 1; i < number+1; i++) {
    returnedString += "<div>" + Math.pow(2, i) + "<div>";
  }
  display.innerHTML = returnedString;
}

function areWeThereYet () {
  var returnedString = "";
  while (returnedString !== "Yes") {
    returnedString = prompt("Are we there yet?");
  }
  display.innerHTML = returnedString;
}

function triangle () {
  var returnedString = "";
  for (i = 1; i < 6; i++) {
    var lineString = "";
    for (j = 1; j <= i; j++) {
      lineString += "*";
    }
    returnedString += "<p>" + lineString + "</p>";
  }
  display.innerHTML = returnedString;
}

function tableSquares (number) {
  var returnedString = "";
  for (i = 1; i <= number; i++) {
    var lineString = "";
    for (j = 1; j <= number; j++) {
      lineString += ("|" + (i*j) + "|");
    }
    returnedString += "<p>" + lineString + "</p>";
  }
  display.innerHTML = returnedString;
}
