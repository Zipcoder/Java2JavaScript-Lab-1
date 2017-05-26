" use strict ";

var display = document.getElementById("display");

function yourFunctionName(){
  display.innerHTML = "henlo Brian";
}

function oneToTen(){
    display.innerHTML = "oneToTen()<br>***Output***";

    for (var i = 1; i < 11; i++){
        display.innerHTML += "<br>" + i;
    }
}

function oddNumbers(){
    display.innerHTML = "oddNumbers()<br>***Output***";
    
    for (var i = 1; i < 20; i+=2){
        display.innerHTML += "<br>" + i;
    }
}

function squares(){
    display.innerHTML = "squares()<br>***Output***";
    
    for (var i = 1; i < 11; i++){
        display.innerHTML += "<br>" + i * i;
    }
}

function random4(){
    display.innerHTML = "random4()<br>***Output***";
    
    for (var i = 1; i <= 4; i++){
        display.innerHTML += "<br>" + Math.floor((Math.random() * 10) + 1);
    }
}

function even(){ 
    display.innerHTML = "even()<br>***Output***";
    
    for (var i = 2; i < 20; i+=2){
        display.innerHTML += "<br>" + i;
    }
}

function powers(){
    display.innerHTML = "powers()<br>***Output***";
    
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
    var triangle = "";
    display.innerHTML = "triangle()<br>***Output***";
    
    for (var i = 1; i < 6; i+=1){
        triangle += "*";
        display.innerHTML += "<br>" + triangle;
    }
    
}

function tableSquare(){
    display.innerHTML = "tableSquare()<br>***Output***";
    var table = "";
    
    for (var i=1; i <= 4; i++){
        table += "<br>";
        
        for (var j=1; j <= 4; j++){
            table += "|";
            var multiple = i*j;
            
            if (multiple <= 9){
                table += "\xa0" + multiple + " \xa0 ";
            }
            else if(multiple < 100){
                table += " " + multiple + " ";
            }
        }
        table += "|";
    }
    
    display.innerHTML += table;
    
}

function tableSquares(n){ 
    display.innerHTML = "tableSquares()<br>***Output***";
    var table = "";
    
    for (var i=1; i <= n; i++){
        table += "<br>";
        
        for (var j=1; j <= n; j++){
            table += "|";
            var multiple = i*j;
            
            if (multiple <= 9){
                table += "\xa0" + multiple + " \xa0 ";
                
            }else if(multiple <= 99){
                table += " " + multiple + " ";
                
            }else{
                table += "" + multiple + "";
            }
        }
        table += "|";
    }
    
    display.innerHTML += table;
    
}
 