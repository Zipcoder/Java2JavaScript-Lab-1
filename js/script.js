" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}


function oneToTen(){
  var addLoop="oneToTen()</br>***Output***</br>";
  for(var i=1; i<=10;i++){
    addLoop+=i +"</br>";
  }
  display.innerHTML =addLoop;
}

function oddNumbers(){
  var addNum="oddNumbers()</br>***Output***</br>";
  for(var i=1; i<=20;i=i+2){
    addNum+=i +"</br>";
  }
  display.innerHTML =addNum;
}

function squares(){
  var addSquares="squares()</br>***Output***</br>";
  for(var i=1; i<=10; i++){
    addSquares+= (i*i)+"</br>";
  }
  display.innerHTML=addSquares;
}

function random4(){
  var addRandom="random4()</br>***Output***</br>";
  for(var i=1; i<=4;i++){
    addRandom+= parseInt((Math.random()*100)+1)+"</br>";
  }
  display.innerHTML=addRandom;
}


function even(){
  var n = prompt("Even number up to n, Enter n: ");
  if(n != null){
    var addEven="even("+n+ ")</br>***Output***</br>";
    for(var i=2; i<n; i=i+2){
      addEven+= i+"</br>";
    }
    display.innerHTML=addEven;
  }
}

function powers(){
  var n = prompt("Powers up to 2^n, Enter n: ");
  if(n != null){
    var addPower="powers("+n+ ")</br>***Output***</br>";
    for(var i=1; i<=n; i++){
      addPower+= Math.pow(2,i)+"</br>";
    }
    display.innerHTML=addPower;
  }
}

function areWeThereYet(){
  var ans="no";
  var totalAns="";
  while(ans.toLowerCase() !="yes"){
    ans= prompt("Arewethereyet?");
    totalAns+="Arewethereyet?</br>" +ans+ "</br>";
    if(ans.toLowerCase() =="yes"){
      totalAns+="Good!";
      display.innerHTML=totalAns;
    }
  }
}

function triangle(){
  var outPut="***Output***</br>";
  var tri="";
  for(var i=1; i<=5;i++){
    tri += "*";
    outPut += tri +"</br>";
  }
  display.innerHTML=outPut;
}

function tableSquare(){
  var outPut="tableSquare()</br>***Output***</br>A4x4tablesquare</br>";
  for(var i=1; i<=4;i++){
    for(var j=1; j<=4; j++){

      outPut+= (" | ") +(i*j);
    }
    outPut+=" | </br>";
  }
  display.innerHTML=outPut;
}

function tableSquareN(){
  var n = prompt("n x n table, Enter n: ");
  var outPut="tableSquare("+n+")</br>***Output***</br>A"+n+"x"+n+"tablesquare</br>";
  for(var i=1; i<=n;i++){
    for(var j=1; j<=n; j++){

      outPut+= (" | ") +(i*j);
    }
    outPut+=" | </br>";
  }
  display.innerHTML=outPut;
}
