" use strict ";

var display = document.getElementById("display");

function oneToTen (){
  for(i = 1; i < 11; i++){
      display.innerHTML += i + "<br/>";
  }
}
    
function oddNumbers(){
    for(i = 1; i < 20; i++){
        if(i % 2 != 0 || i == 1){
            display.innerHTML += i + "<br/>";
        }
    }
}

function squares(){
    for(i = 1; i < 11; i++){
        display.innerHTML += (i*i) + "<br/>";
    }
}

function random4(){
    for(i = 0; i < 4; i++){
        display.innerHTML += (Math.floor(Math.random() * 100) + 1) + "<br/>"
    }
}

function even(n){
    for(i = 2; i < n; i++){
        if(i % 2 == 0){
            display.innerHTML += i + "<br/>";
        }
    }
}

function powers(n){
    for(i = 1; i <= n; i++){
        display.innerHTML += Math.pow(2, i) + "<br/>";
    }
}

function areWeThereYet(){
    do{
        var areWe = prompt("Are we there yet?");
    }while(areWe != "Yes");
}

function triangle(){
    for(i = 0; i < 5; i++){
        for(j = 0; j < i + 1; j++){
            display.innerHTML += "*";
        }
        display.innerHTML += "<br/>";
    }
}

function tableSquare(){
    for(i = 1; i < 5; i++){
        for(j = i; j <= i*4; j+= i){
            display.innerHTML += "|" + j;
        }
        display.innerHTML += "|" + "<br/>"
    }
}

function tableSquares(n){
    for(i = 1; i <= n; i++){
        for(j = i; j <= i*n; j+= i){
            display.innerHTML += "|" + j;
        }
        display.innerHTML += "|" + "<br/>"
    }
}


        

