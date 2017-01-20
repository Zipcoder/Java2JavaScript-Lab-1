" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}

function oneToTen() {
    display.innerHTML += "oneToTen() <br> *** Output *** <br>";
    //var answer = prompt("Whats your number?");
    for(var i=1; i<=10; i++)
    display.innerHTML += i + "<br/>";
}

function oddNumbers() {
    display.innerHTML += "oddNumbers() <br> *** Output *** <br>";
    var dummy =0;
    //var answer = prompt("Whats your number?");
    for(var i=1; i<=20; i++)
        (i%2)==0? display.innerHTML += "" : display.innerHTML += i + "<br/>";
}

function squares() {
    display.innerHTML += "squares() <br> *** Output *** <br>";
    //var answer = prompt("Whats your number?");
    for(var i=1; i<=10; i++)
        display.innerHTML += i*i + "<br/>";
}

function random4() {
    display.innerHTML += "random4() <br> *** Output *** <br>";
    //var answer = prompt("Whats your number?");
    for(var i=1; i<=4; i++)
        display.innerHTML += Math.ceil(Math.random()*100)+1 + "<br/>";
}

function even() {
    var n = prompt("Whats your number?");
    display.innerHTML += "even(" + n +") <br> *** Output *** <br>";
    for(var i=1; i<n; i++)
        (i%2)==0? display.innerHTML += i + "<br/>" : display.innerHTML += "" ;
}

function powers() {
    var n = prompt("Whats your number?");
    display.innerHTML += "powers(" + n +") <br> *** Output *** <br>";
    for(var i=1; i<=n; i++)
        display.innerHTML += Math.pow(2,i) + "<br/>";
}

function areWeThereYet() {
    var userInput = prompt("Are we there yet?");
    while(userInput!="Yes"){
        display.innerHTML += "Arewethereyet? <br>" + userInput + " <br>";
        userInput = prompt("Are we there yet?");
    }
    display.innerHTML += userInput + "<br> Good!";
}

function triangle(){
    display.innerHTML += " triangle() <br> *** Output *** <br>";
    var stars;
    for(var i=0; i<6; i++) {
        for (var j = 0; j < i; j++) {
            stars += "*";
        }
        display.innerHTML += " " + stars + " <br>";
        stars = " ";
    }
}

function tableSquare(){
    display.innerHTML += " tableSquare() <br> *** Output *** <br>";
    var testStr = "| ";
    for(var i=1; i<=4; i++){
        for(var j=1; j<=4; j++){
            testStr += i*j>=10? " " + i*j + " |" : "   " + i*j + " |" ;
        }
        display.innerHTML += testStr + "<br>";
        testStr = "| ";
    }
}

function tableSquares(){
    var userNum = prompt("Whats your number?");
    display.innerHTML += " tableSquare(" + userNum + ") <br> *** Output *** <br>";
    var testStr = "| ";
    for(var i=1; i<=userNum; i++){
        for(var j=1; j<=userNum; j++){
            testStr += i*j>=10? " " + i*j + " |" : "   " + i*j + " |" ;
        }
        display.innerHTML += testStr + "<br>";
        testStr = "| ";
    }
}
