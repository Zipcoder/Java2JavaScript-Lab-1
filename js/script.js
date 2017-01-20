" use strict ";

var display = document.getElementById("display");

function yourFunctionName(){
  display.innerHTML = "hello";
}

function hello(){
    display.innerHTML = "hello";
}

function oneToTen(){
  display.innerHTML = "oneToTen()<br>***Output***<br>";
  for (var i = 1;i <= 10; i++){
      display.innerHTML += i + "<br>";
  }
}

function oddNumbers(){
  display.innerHTML = "oddNumbers()<br>***Output***<br>";
  for (var i = 0; i < 20; i++){
    if (i % 2 != 0){
      display.innerHTML += i + "<br>";
    }
  }
}

function squares(){
    display.innerHTML = "squares()<br>***Output***<br>";
    var maxCount = 100;
    for (var i = 1; (i*i) <= maxCount; i++){
        display.innerHTML += (i*i) + "<br>";
    }
}

function random4(){
    display.innerHTML = "random4()<br>***Output***<br>";
    var maxRandomNumbers = 4;
    for (var i = 0; i < maxRandomNumbers; i++){
      display.innerHTML += Math.floor(Math.random() * 10) + "<br>";
    }
}

function even(evenNumbers){
  display.innerHTML = "even(" + evenNumbers + ")<br>***Output***<br>";
  for (var i = 2; i < evenNumbers; i += 2){
    display.innerHTML += i + "<br>";
  }
}

function powers(powersNumbers){
  display.innerHTML = "powers(" + powersNumbers + ")<br>***Output***<br>";
  for (var i = 1; i <= powersNumbers ; i++){
    display.innerHTML += (i*i) + "<br>";
  }
}

function areWeThereYet(){
  display.innerHTML = "";
    do{
      var answer = prompt("Arewethereyet?");
        display.innerHTML += "Arewethereyet?<br>" + answer + "<br>";
    }while(answer != "Yes")
  display.innerHTML += "Good!";
}

function triangle(){
  display.innerHTML = "triangle()<br>***Output***<br>";
  var size = 5;
  for (var i = 1; i <= size; i++){
    for (var j = 0; j < i; j++){
      display.innerHTML += "*";
    }
    display.innerHTML += "<br>";
  }
}

function tableSquare(){
  display.innerHTML = "tableSquare()<br>***Output***<br>A4x4tablesquare<br>";
  for (var i = 1; i <=4; i++){
    display.innerHTML += "|";
    for (var j = 1; j <=4; j++){
      if ((i*j) < 10){
        display.innerHTML += "&nbsp&nbsp" + i*j + "|";
      } else {
        display.innerHTML += i*j + "|";
      }
    }
    display.innerHTML += "<br>";
  }
}

function tableSquares(n){
  display.innerHTML = "tableSquare(" + n + ")<br>***Output***<br>A" + n + "x" + n + "tablesquare<br>";
  for (var i = 1; i <= n; i++){
    display.innerHTML += "|";
    for (var j = 1; j <= n; j++){
      if ((i*j) < 10){
        display.innerHTML += "&nbsp&nbsp" + i*j + "|";
      } else {
        display.innerHTML += i*j + "|";
      }
    }
    display.innerHTML += "<br>";
  }
}
