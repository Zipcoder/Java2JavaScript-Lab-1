" use strict ";

var display = document.getElementById("display");

function oneToTen(){
  display.innerHTML = "oneToTen()<br>***Output***<br>"
  for (var i = 1; i <= 10; i++) {
    display.innerHTML += i+'<br>'
  }
}

function oddNumbers(){
  display.innerHTML = "oddNumbers()<br>***Output***<br>"
  for (var i = 1; i < 20; i+=2) {
    display.innerHTML += i+'<br>'
  }
}

function squares(){
  display.innerHTML = "squares()<br>***Output***<br>"
  for (var i = 1; i*i <= 100; i++) {
    display.innerHTML += (i*i)+'<br>'
  }
}

function oneToTen(){
  display.innerHTML = "oneToTen()<br>***Output***<br>"
  for (var i = 1; i <= 10; i++) {
    display.innerHTML += i+'<br>'
  }
}

function random4(){
  display.innerHTML = "random4()<br>***Output***<br>"
  for (var i = 1; i <= 4; i++) {
    display.innerHTML += Math.floor(Math.random() * 100) + 1  +'<br>'
  }
}

function even(n){
  display.innerHTML = "even()<br>***Output***<br>"
  for (var i = 2; i < n; i+=2) {
    display.innerHTML += i +'<br>'
  }
}

function powers(n){
  display.innerHTML = "powers("+n+")<br>***Output***<br>"
  for (var i = 1; i <= n; i++) {
    display.innerHTML += Math.pow(2,i) + '<br>'
  }
}

function areWeThereYet(){
  do{
    display.innerHTML += "Arewethereyet?<br>"
    answer = prompt("Are we there yet?", "Well are we?")
    display.innerHTML += answer + '<br>'
  } while(answer!=="Yes")
  display.innerHTML += "Good!"
}

function triangle(){
  display.innerHTML = "triangle()<br>***Output***<br>"
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j <= i; j++){
       display.innerHTML += "*"
    }
      display.innerHTML +=  "<br>"
  }
}

function tableSquare(){
  display.innerHTML = "tableSquare()<br>***Output***<br>A4x4tablesquare<br>"
  for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= 4; j++){
      if ((i*j)<10){
        display.innerHTML += "|&nbsp&nbsp"+(i*j)
      } else {
        display.innerHTML += "|"+(i*j)
      }
    }
      display.innerHTML +=  "|<br>"
  }
}

function tableSquares(n){
  display.innerHTML = "tableSquare()<br>***Output***<br>A"+n+"x"+n+"tablesquare<br>"
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++){
      if ((i*j)<10){
        display.innerHTML += "|&nbsp&nbsp"+(i*j)
      } else {
        display.innerHTML += "|"+(i*j)
      }
    }
      display.innerHTML +=  "|<br>"
  }
}
