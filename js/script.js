" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}

function oneToTen(){
  display.innerHTML = "oneToTen()<br/>";
  display.innerHTML += "***Output***<br/>";
  for(i = 1; i <=10; i++){
      display.innerHTML += i +"<br/>";
  }
}

function oddNumbers(){
  display.innerHTML = "oddNumbers()<br/>";
  display.innerHTML += "***Output***<br/>";
  for(i = 1; i <=20; i++){
    if(i % 2 !== 0){
      display.innerHTML += i +"<br/>";
    }
  }
}

function squares(){
  display.innerHTML = "squares()<br/>";
  display.innerHTML += "***Output***<br/>";
  for(i = 1; i <=10; i++){
      display.innerHTML += i*i +"<br/>";
  }
}

function random4(){
  display.innerHTML = "random4()<br/>";
  display.innerHTML += "***Output***<br/>";
  for(i = 0; i < 4; i++){
    display.innerHTML += Math.floor((Math.random() * 100) + 1) + "<br/>";
  }
}

function even(n){
  display.innerHTML = "even(n)<br/>";
  display.innerHTML += "***Output***<br/>";
  for(i = 1; i <= n; i++){
    if(i % 2 === 0){
      display.innerHTML += i +"<br/>";
    }
  }
}

function powers(n){
  display.innerHTML = "powers(n)<br/>";
  display.innerHTML += "***Output***<br/>";
  for(i=0;i<n;i++){
    var product = 2;
    for(j=0;j<i;j++){
      product *= 2;
    }
    display.innerHTML += product + "<br/>";
  }
}

function arewethereyet(){
  display.innerHTML = "arewethereyet()<br/>";
  display.innerHTML += "***Output***<br/>";
  var input;
  for(i=1; input!== "Yes";i++){
    display.innerHTML += "Arewethereyet?<br/>";
    input = prompt("Arewethereyet", "No");
    display.innerHTML += input+"<br/>";
  }
  display.innerHTML += "Good!";
}

function triangle(){
  display.innerHTML = "triangle()<br/>";
  display.innerHTML += "***Output***<br/>";
  for(i=0;i<5;i++){
    var string = "*";
    for(j=0;j<i;j++){
      string += "*";
    }
    display.innerHTML += string + "<br/>";
  }
}

function tableSquare(){
  display.innerHTML = "tableSquare()<br/>";
  display.innerHTML += "***Output***<br/>";
  for(i=1;i<=4;i++){
    for(j=0;j<4;j++){
      display.innerHTML += "|";
      if(i+(i*j)<10){
        display.innerHTML += " ";
      }
      display.innerHTML += (i+(i*j));
    }
    display.innerHTML += "| <br/>"
  }
}

function tableSquares(n){
  display.innerHTML = "tableSquares(n)<br/>";
  display.innerHTML += "***Output***<br/>";
  for(i=1;i<=n;i++){
    for(j=0;j<n;j++){
      display.innerHTML += "|";
      if(i+(i*j)<10){
        display.innerHTML += " ";
      }
      display.innerHTML += (i+(i*j));
    }
    display.innerHTML += "| <br/>"
  }
}
