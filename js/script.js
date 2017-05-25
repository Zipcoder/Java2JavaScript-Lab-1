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
  var star="";
  display.innerHTML="triangle()<br>***Output***";
  for(var i=0;i<5;i++){
      star+="*";
      display.innerHTML+="<br>"+ star;
    }
  }

  function tableSquare(){
    display.innerHTML="tableSquare()<br>***Output***<br>";
    var filledTable="";
    for(var i=1;i<=4;i++){
      filledTable+="<br>"

      for (var j=1;j<4;j++){
      filledTable+="|";
      var multiple= i*j;
      if (multiple<=9){
        filledTable+= "\xa0"+multiple+ " \xa0 ";
      }
      else if(multiple>=10){
        filledTable+= " " +multiple + " ";
      }
    }
    filledTable+="|";

  }
  display.innerHTML+=filledTable;
}

function tableSquares(n){
  display.innerHTML="tableSquare()<br>***Output***<br>";
  var filledTable="";
  for(var i=1;i<=n;i++){
    filledTable+="<br>"

    for (var j=1;j<=n;j++){
    filledTable+="|";
    var multiple= i*j;
    if (multiple<=9){
      filledTable+= "\xa0 "+multiple+ "\xa0 "
    }
    else if(multiple>=10){
      filledTable+= " " +multiple + " ";
    }
  }
  filledTable+="|";

}
display.innerHTML+=filledTable;
}
