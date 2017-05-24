" use strict ";

var display = document.getElementById("display");
//2.1
function oneToTen() {
  for (var i = 1; i < 11; i++){
    display.innerHTML+= i + "</br>";
  }
}
//2.2
function oddNumbers() {
  for (var i = 19; i > 0; i-=2){
    display.innerHTML+= i + "</br>";
  }
}
//2.3
function squares(){
  var sum = 0;
  for (var i = 0; i <= 100; i++){
    sum += i*i;
    i++;
    display.innerHTML+= i + "</br>";
  }
}
//2.4
function random4(){
  for(var i = 0; i <= 4; i++){
    i = Math.random() * 100;
    display.innerHTML+= i + "</br>";
  }
}
//2.5
function even(){
  for (var i = 0 ; i <= 20; i+=2){
    display.innerHTML+= i + "</br>";
  }
}
//2.6
function powersOfTwo(){
  for(var i = 1; i <= 256; i*=2){
    display.innerHTML+= i + "</br>";
  }
}
//2.7
function areWeThereYet(){
var userInput = prompt("Are we there yet?").toLowerCase();
switch(userInput){
  case "yes":
      alert("Good!");
      break;
  case "no":
      areWeThereYet();
      break;
  default:
      areWeThereYet();
  }
}
//2.8
function triangle(){
  var star = "*";
  for(var i = 0; i < 10; i++){
    display.innerHTML+= star + "</br>";
    star +="*";
  }
}
//2.9
function tableSquare(){
  for(var i = 0; i <= 5; i++){
    for (var j =i; j <= i*4; j += i){
      display.innerHTML =+ "|" + j;
    }
    display.innerHTML += "|" + "</br>";
  }
}
//2.10
function otherTableSquare(n){
  for(var i = 0; i <= n; i++){
    for (var j =i; j <= i*n; j += i){
      display.innerHTML =+ "|" + j;
    }
    display.innerHTML += "|" + "</br>";
  }
}
