" use strict ";

var display = document.getElementById("display");
var lineBreak = "<br >";


function oneToTen(){
    var output = "oneToTen() " + lineBreak;
    output += "***Output***" + lineBreak;

    display.innerHTML = "";


  for(var i = 1; i <= 10; i++) {
      output += i + lineBreak;
  }

  display.innerHTML = output;
}

function oddNumbers(){
    var output = "oddNumbers()" + lineBreak;
    output += "***Output***" + lineBreak;
    display.innerHTML = "";

    for(var i = 1; i <= 20; i++){
        if((i % 2) != 0){
            output += i + lineBreak;
        }
    }
    display.innerHTML = output;
}

function squares(){
    var output = "squares()" + lineBreak;
    var count = 1;
    output += "***Output***" + lineBreak;
    display.innerHTML = "";

    for(var i = 1; i <= 10; i++){
        output += (count * count) + lineBreak;
        count++;
    }
    display.innerHTML = output;
}

function random4(){
    var output = "random4()" + lineBreak;
    output += "***Output***" + lineBreak;
    display.innerHTML = "";

    for(var i = 1; i <= 4; i++){
        output += Math.floor((Math.random() * (100 - 1) + 1)) + lineBreak;
    }
    display.innerHTML = output;


}

function even(x){
    var output = "even(20)" + lineBreak;
    output += "***Output***" + lineBreak;
    display.innerHTML = "";

    for(var i = 1; i < x; i++){
        if((i % 2) == 0){
            output += i + lineBreak;
        }
    }
    display.innerHTML = output;
}

function powers(y){
    var output = "powers(8)" + lineBreak;
    output += "***Output***" + lineBreak;
    display.innerHTML = "";

    for(var i = 1; i <= y; i++){
        output += Math.pow(2, i) + lineBreak;
    }
    display.innerHTML = output;

}

function areWeThere(){
    var answer;
    display.innerHTML="";
    do {
        display.innerHTML += "Arewethereyet" + lineBreak;

        answer = prompt("Arewethereyet?", "");
        if (answer != null) {
            if (answer == "yes") {
                display.innerHTML += "Good";
            } else {
                display.innerHTML += answer + lineBreak;
            }
        }
    }
    while (answer != "yes");

}

function triangle(){
    var star = "*";
    display.innerHTML="";
    var output = "***Output***";

    for(var i = 0; i < 6; i++){
        for(var j = 0; j < i; j++){
            output += star;
        }
        output += lineBreak;
    }
    display.innerHTML = output;
}

function tableSquare(){
    display.innerHTML="";
    var blankSpace = '&nbsp;';
    var output = "tableSquares()" + lineBreak;
    output = "***Output***" + lineBreak;

    for(var i = 1; i < 5; i++){
        output += "|";
        for(var j = 1; j < 5; j++){
            var answer = i*j;
            if(answer<10){
                output += blankSpace + blankSpace + i * j + "|";
            } else {
                output += i * j + "|";
            }
        }
        output += lineBreak;
    }
    display.innerHTML = output;
}

function tableSquares(x) {
    display.innerHTML="";
    var blankSpace = '&nbsp;';
    var output = "tableSquares(6)" + lineBreak;
    output = "***Output***" + lineBreak;

    for(var i = 1; i < (x+1); i++){
        output += "|";
        for(var j = 1; j < (x+1); j++){
            var answer = i*j;
            if(answer<10){
                output += blankSpace + blankSpace + i * j + "|";
            } else {
                output += i * j + "|";
            }
        }
        output += lineBreak;
    }
    display.innerHTML = output;
}


