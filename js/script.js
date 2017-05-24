" use strict ";

var display = document.getElementById("display");

function oneToTen(){
var nums = 0;
var finalCount = "";

  for(var i = 1; i <= 10; i++){
      nums = i;
      finalCount += nums + "</br>";
  }

  display.innerHTML = finalCount;
}

function oddNumbers(){
  var nums = 0;
  var finalCount = "";

  for(var i = 1; i<= 20; i++){
    if(i % 2 ==1){
      nums = i;
      finalCount += nums += "</br>";
    }
  }
  display.innerHTML = finalCount;
}

function squareNumbers(){
  var nums = 0;
  var finalCount = "";

  for(var i = 1; i <=10; i++){
    nums = i * i;
    finalCount += nums + "</br>";
  }
  display.innerHTML = finalCount;
}

function randomNumber(){
  var nums = 0;
  var finalCount = "";

  for(var i = 1; i <= 4; i++){
    nums = Math.floor(Math.random() * 100 + 1);
    finalCount += nums + "</br>";
  }
  display.innerHTML = finalCount;
}

function evenNumbers(){
  var nums = 0;
  var finalCount = "";

  for(var i = 1; i <=20; i++){
    if(i % 2 ==0){
      nums = i;
      finalCount += nums + "</br>";
    }
  }
  display.innerHTML = finalCount;
}

function powersOfTwo(){
  var nums = 0;
  var finalCount = "";

  for(var i = 1; i <= 8; i++){
    nums = Math.floor(Math.pow(2,i));
    finalCount += nums + "</br>";
  }
  display.innerHTML = finalCount;
}

function triangle(){
  var finalAnswer = "";

  for(var i = 1; i<= 5; i++){
    var patternHolder = "";
    for(var j = 0; j < i; j++){
      patternHolder += "*";
    }
    if(i != 5){
      patternHolder += "</br>";
    }
    finalAnswer += patternHolder;
  }
  display.innerHTML = finalAnswer;
}
