" use strict ";

var display = document.getElementById("display");

function oneToTen (){
    var output = "*** Output ***<br>oneToTen()";
    for(i=1; i<11; i++){
        output += "<br>" + i;
    }
  display.innerHTML = output;
}

function oddNumbers (){
    var output = "*** Output ***<br>oddNumbers()";
    for(i=1; i<21; i++){
        if(i%2 != 0){
        output += "<br>" + i;
        }
    }
  display.innerHTML = output;
}

function squares (){
    var output = "*** Output ***<br>squares()";
    for(i=1; i<11; i++){
        output += "<br>" + (i*i);
    }
  display.innerHTML = output;
}

function random4 (){
    var output = "*** Output ***<br>random4()";
    
    for(i=1; i<5; i++){
        output += "<br>" + Math.floor((Math.random()*10)+1);
    }
  display.innerHTML = output;
}

function even (n){
    var output = "*** Output ***<br>even("+n+")";
    
    for(i=1; i<n; i++){
        if(i%2 == 0){
          output += "<br>" + i;  
        }
    }
  display.innerHTML = output;
}

function powers (n){
    var output = "*** Output ***<br>powers("+n+")";
    
     for(i=1; i<n+1; i++){
          output += "<br>" + Math.pow(2, i);  
    }
  display.innerHTML = output;
}

function areWeThereYet (){
    var input = prompt("Are we there yet?");

        while(input.toUpperCase() !== "YES")
        {
            input = prompt("Are we there yet?");
        }
    
  display.innerHTML = "Good!";
}

function triangle (){
    var output = "*** Output ***<br>triangle()<br>"
    for(i=1; i<6; i++){
        for(j=1; j<i+1; j++){
            output += "*";
        }
        output += "<br>";
    }
  display.innerHTML = output.trim();
}

function tableSquare (){
    var output = "*** Output ***<br>tableSquare()<br>A 4 x 4 table square<br>";
    
    for (i = 1; i < 5; i++){
            for (j = 1; j < 5; j++){
                if (i*j < 10 && j>=3){
                    output += "|&nbsp" +"&nbsp" +"&nbsp" + i * j + "&nbsp";
                }else{
                    output += "|&nbsp" + i * j + "&nbsp";
                }
            }
        output += "|<br>";
    }        
  display.innerHTML = output.trim();
}

function tableSquares (n){
    var output = "*** Output ***<br>tableSquares()<br>A&nbsp" + n + "&nbspx&nbsp" + n + " table square<br>";
    
    for (var i = 1; i <= n; i++) {
            for (var j = 1; j <= n; j++) {
                output += "|&nbsp"  + addSpace((i*j), (j*n)) + (i * j) + "&nbsp";
            }
            output += "|<br>";
        }  
  display.innerHTML = output.trim();
}

function addSpace(currentNum, lastNumInCol){
    var space = "&nbsp";
    var diff = lastNumInCol.toString().length-currentNum.toString().length;

        for (i = 0; i < diff ; i++){
            space += "&nbsp"+"&nbsp";
        }
    return space;
}
