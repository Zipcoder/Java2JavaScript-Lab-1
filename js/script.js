" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}

function printNumbersOneToTen(){
  display.innerHTML=("oneToTen<br>***Output***");
  for(var i=1;i<=10;i++){
    display.innerHTML+=("<br>" +i);
  }
}
function odd(){
  display.innerHTML=("oddNumbers()<br>***Output***");
  for(var i=1;i<20;i+=2){
    display.innerHTML+=("<br>"+i);
  }
}
function squareNumbersto100(){
  display.innerHTML=("squares()<br>***Output***");
  for(var i=1;i<=10;i++){
    display.innerHTML+=("<br>"+ i*i);
  }
}

function randomNumberGenerator(){
display.innerHTML=("random4()<br>***Output***");
  for(var i=0;i<4;i++){
    var randomNumber= Math.floor(Math.random()*100);
    display.innerHTML+=("<br>"+randomNumber);
  }
}

function even(n){
  display.innerHTML=("even(20)<br>***Output***");
  for(var i=2;i<n;i+=2){
    display.innerHTML+=("<br>"+i);
  }
}

function powersOfTwo(n){
  display.innerHTML=("***Output***");
  for(var i=1;i<=n;i++){
    display.innerHTML+="<br>" + Math.pow(2, i);
  }
}

function areWeThereYet(){
  var answer = prompt("Are we there yet?");

while(answer!="yes"){
  answer= prompt("Are we there yet?");

}
display.innerHTML="Good!";
}

function triangle(){
  var filledString="triangle()<br>***Output***";
  for(var i=1;i<=6;i++){
    for(var j=1;j<i;j++){
      filledString+=("*");
    }
    if(i<6){
      filledString+=("<br>");
    }
  }
  display.innerHTML=filledString;
}
