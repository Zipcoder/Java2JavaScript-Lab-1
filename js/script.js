" use strict ";

var display = document.getElementById("display");

function oneToTen(){
  for (i = 1; i <= 10; i++) {
      display.innerHTML += i + "<br>";
  }
}

function oddNumbers(){
  for (i = 1; i <= 20; i+=2) {
      display.innerHTML += i + "<br>";
  }
}

function squareNumbers(){
  for (i = 1; i <= 10; i++) {
      display.innerHTML += i * i + "<br>";
  }
}

function random4(){
  var result;
  for(i = 1; i <= 4; i++){
    result = Math.round(Math.random() * 99) + 1;
    display.innerHTML += result + "<br>"
  }
}

function even(n){
  for (i = 2; i < n; i+=2) {
      display.innerHTML += i +  "<br>";
  }
}

function powers(n){
  for (i = 1; i <= n; i++) {
      display.innerHTML += Math.pow(2,i) + "<br>";
  }
}

function thereYet(){
  var quit = "no";
  while(quit != "yes"){
    quit = prompt("Are we there yet?");
  }
}

function triangle(n){
  for (i = 1; i <= n; i++) {
    for(j = 1; j <= i; j++){
      display.innerHTML += "*";
    }
    display.innerHTML += "<br>";
  }
}

function tableSquare(){
  for (i = 1; i <= 4; i++) {
    for(j = 1; j <= 4; j++){
      display.innerHTML += i * j + "| ";
    }
    display.innerHTML += "<br>";
  }
}

function tableSquare(n){
  for (i = 1; i <= n; i++) {
    for(j = 1; j <= n; j++){
      display.innerHTML += i * j + "| ";
    }
    display.innerHTML += "<br>";
  }
}
