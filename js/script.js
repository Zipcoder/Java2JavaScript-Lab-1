" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}

function loops() {
  for(i = 1; i <= 10; i++){
   display.innerHTML =  display.innerHTML + i + "<br/>";
  }
}

function oddNumbers(){

  for(i=1; i <=20; i++){
    if(i%2 !== 0){
      display.innerHTML =  display.innerHTML + i + "<br/>";
    }
  }
}

function squareNumbers(){

  for(i=1; i <= 10; i++){
    display.innerHTML = display.innerHTML + (i*i) + "<br/>";
  }
}

function randomNumbers(){
  for(i=1; i <= 4; i++){
    random = Math.floor((Math.random() * 100) + 1);
display.innerHTML = display.innerHTML + random + "<br/>";

  }
}

function evenNumbers(n){

for(i = 1; i < n; i++){
  if(i%2 == 0){
    display.innerHTML =  display.innerHTML + i + "<br/>";
  }
  }
}

function powersOfTwo(n){

for(i = 1; i <= n; i++){

    display.innerHTML =  display.innerHTML + Math.pow(2,i) + "<br/>";
  }
}

function areWeThereYet(){

 yes = false;
var person = prompt("Are we there yet?");
        do
            {
            if (person == "Yes") {
                yes = true;
                display.innerHTML =  display.innerHTML + "Good!";
            }
            else
                person = prompt("Are we there yet?");
        }while(!yes);
}

function triangle(){

 maxS = 5;

       for ( row = 1; row <= maxS; row ++) {

           for ( star= 0; star < row; star++) {
               display.innerHTML =  display.innerHTML + "* ";
           }
           display.innerHTML =  display.innerHTML + "<br/>"
       }
}

function tableSquare(){

  for(i = 1; i <=4; i++){

            display.innerHTML =  display.innerHTML + "|";

            for(j = 1; j <=4; j++){

                j*i >= 10?  display.innerHTML =  display.innerHTML + " " + j * i + " |" : display.innerHTML =  display.innerHTML +  " \u00A0" + j * i + "\u00A0 |";
            }
            display.innerHTML =  display.innerHTML + "<br/>"
        }
}

function bigTable(){

  for(i = 1; i <=6; i++){

            display.innerHTML =  display.innerHTML + "|";

            for(j = 1; j <=6; j++){

                j*i >= 10?  display.innerHTML =  display.innerHTML + " " + j * i + " |" : display.innerHTML =  display.innerHTML +  " \u00A0" + j * i + "\u00A0 |";
            }
            display.innerHTML =  display.innerHTML + "<br/>"
        }
}
