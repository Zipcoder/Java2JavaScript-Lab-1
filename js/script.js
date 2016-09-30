" use strict ";

var display = document.getElementById("display");

function wuntoten (){
    display.innerHTML = null;
    //var wuntotenArray = new Array(10);
    for (var i = 1;i <= 10;i++){
        //wuntotenArray[i-1] = i;
        display.innerHTML += i + "<br>";
    }
  //display.innerHTML = wuntotenArray.toString();
}

function oddNumbers (){
    display.innerHTML = null;
    for (var i = 1;i < 20;i+=2){
        display.innerHTML += i + "<br>";
    }
}

function squareNumbers (){
    display.innerHTML = null;
    for (var i = 1;i <= 10;i++){
        display.innerHTML += i*i + "<br>";
    }
}

function randomNumbers (){
    display.innerHTML = null;
    for (var i = 0;i < 4;i++){
        display.innerHTML += Math.ceil(Math.random()*100) + "<br>";
    }
}
    
function evenNumbers (n){
    display.innerHTML = null;
    //var n = prompt();
    for (var i = 0;i < n;i+=2){
        display.innerHTML += i + "<br>";
    }
}

function powersOf2 (){
    display.innerHTML = null;
    for (var i = 1;i < 9;i++){
        display.innerHTML += Math.pow(2,i) + "<br>";
    }
}

function areWeThereYet () {
    display.innerHTML = null;
    do{
        ans=prompt("Are we there yet?");
    }while(ans.toUpperCase()!=="YES")
    display.innerHTML += "Good!";
}

function triangle (n) {
    display.innerHTML = null;
    for (var i = 1;i <= n;i++){
        for (var j = 0;j < i;j++){
            display.innerHTML += "*";
        }
        display.innerHTML += "<br>";
    }
}

function tableSquare (){
    display.innerHTML = null;
    var daBracket;
    for (var i = 1;i <= 4;i++){
        for (var j = 1;j <= 4;j++){
            daBracket = ((i*j)<10)?"| ":"|";
            display.innerHTML += daBracket+j*i;
        }
        display.innerHTML += "|"+"<br>";
    }
}

function tableSquares (n){
    display.innerHTML = null;
    var daBracket;
    for (var i = 1;i <= n;i++){
        for (var j = 1;j <= n;j++){
            daBracket = ((i*j)<10)?"| ":"|";
            display.innerHTML += daBracket+j*i;
        }
        display.innerHTML += "|"+"<br>";
    }
}




