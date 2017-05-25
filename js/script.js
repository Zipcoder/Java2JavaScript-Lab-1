" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "henlo Brian";
}

function oneToTen (){
    
    display.innerHTML = "oneToTen()<br>\*\*\*Output\*\*\*";
    for (var i = 1; i < 11; i++){
        display.innerHTML += "<br>" + i;
    };
}

function oddNumbers(){
    
    display.innerHTML = "oddNumbers()<br>\*\*\*Output\*\*\*";
    
    for (var i = 1; i < 20; i+=2){
        display.innerHTML += "<br>" + i;
    }
}

function squares(){
    
    display.innerHTML = "squares()<br>\*\*\*Output\*\*\*";
    
    for (var i = 1; i < 11; i++){
        display.innerHTML += "<br>" + i * i;
    }
}

function random4(){
    
    display.innerHTML = "random4()<br>\*\*\*Output\*\*\*";
    
    for (var i = 1; i <= 4; i++){
        display.innerHTML += "<br>" + Math.floor((Math.random() * 10) + 1);
    }
}

function even(){
    
    display.innerHTML = "even()<br>\*\*\*Output\*\*\*";
    
    for (var i = 2; i < 20; i+=2){
        display.innerHTML += "<br>" + i;
    }
}

function powers(){
    
    display.innerHTML = "powers()<br>\*\*\*Output\*\*\*";
    
     for (var i = 1; i <= 8; i+=1){
        display.innerHTML += "<br>" + Math.pow(2,i);
    }
}

function areWeThereYet(){
    
    var answer = prompt("Are we there?");
    
    while(answer != "yes"){ 
       answer = prompt("Are we there yet?");
        
    }
    
    display.innerHTML = "Good!";
}

function triangle(){
    
    display.innerHTML = "triangle()<br>\*\*\*Output\*\*\*";
    
    
    
}

 