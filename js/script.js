" use strict ";

var display = document.getElementById("display");

function oneToTen(){
  var counter = "";

  for (var i = 1; i <= 10; i++) {
    counter = counter + i +"<br>";
        }
  display.innerHTML = "*** Output ***"+"<br>"+ "oneToTen"+ "<br>"+ counter ;
}


function oddNumbers(){
  var counter = "";

  for (var i = 1; i < 20; i+=2) {
             {
              counter = counter + i +"<br>";
            }
        }

  display.innerHTML = "*** Output ***"+"<br>"+ "oddNumbers"+ "<br>"+ counter ;
}

function squareNumbers(){
  counter ="";
  var k = 1;
          while (k <= 10) {
            var sqr = k * k;
              k++;
              {
              counter= counter + sqr +"<br>";
              }
         display.innerHTML = "*** Output ***"+"<br>"+ "oneToTen"+ "<br>"+ counter ;
       }
}

function randomNumbers(){
  var counter = "";

  for (var i = 1; i <= 4; i++) {
             {
              counter = counter + Math.floor(Math.random() * 10) + 1   +"<br>";
            }
        }

  display.innerHTML = "*** Output ***"+"<br>"+ "randomNumbers"+ "<br>"+ counter ;
}

function evenNumbers(){
  var counter = "";

  for (var i = 2; i <= 20; i+=2) {
             {
              counter = counter + i +"<br>";
            }
        }

  display.innerHTML = "*** Output ***"+"<br>"+ "evenNumbers"+ "<br>"+ counter ;
}

function powerOfTwo(){
  var counter = "";

  for (var i = 2; i <= 8; i++) {
             {
              counter = counter + 2**i +"<br>";
            }
        }

  display.innerHTML = "*** Output ***"+"<br>"+ "powerOfTwo"+ "<br>"+ counter ;
}

function areWeThereYet(){
 var input = prompt("Are we there yet?").toUpperCase();
 switch(input){
  case "YES":
       alert("Good!");
       break;
  case "NO":
       areWeThereYet();
       break;
  default:
      areWeThereYet();
   }
 }

 function triangle(){
   var counter = "";
   for (var i = 1; i <= 5; i++) {
              for(j=1;j<=i;j++){
               counter = counter + "*" ;
             }
             counter=counter +"<br>";
         }
     display.innerHTML = "*** Output ***"+"<br>"+ "triangle"+ "<br>"+ counter ;
 }

//tableSquare : code reused ,making it parameterized for any n
function tableSquare(n){
  var counter = "";
  for (var i = 1; i <=n; i++) {
             for(j=1;j<=n;j++){
              counter = counter + i*j+" &nbsp;" ;
            }
            counter=counter +"<br>";
        }
    display.innerHTML = "*** Output ***"+"<br>"+ "tableSquare"+ "<br>"+ counter ;
}
