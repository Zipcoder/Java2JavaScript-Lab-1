" use strict ";

var display = document.getElementById("display");

function oneToTen()
{
  display.innerHTML= "***Output**<br>";
  for(i =1; i < 11; i++)
  {
    display.innerHTML+= i;
    display.innerHTML += "<br>";
  }
}

function oddNumbers()
{
  display.innerHTML= "***Output**<br>";
  for(i =1; i < 20; i++)
  {
    display.innerHTML+= i;
    display.innerHTML += "<br>";
    i++;
  }
}

function squares()
{
  display.innerHTML= "***Output**<br>";
  for(i =1; i < 11; i++)
  {
    display.innerHTML+= i*i;
    display.innerHTML += "<br>";
  }
}

function random4()
{
  display.innerHTML= "***Output**<br>";
  for(i =1; i < 5; i++)
  {
    display.innerHTML+= Math.floor((Math.random() * 100) + 1);;
    display.innerHTML += "<br>";
  }
}

function even(num)
{
  display.innerHTML= "***Output**<br>";
    for(i =2; i < num; i++)
    {
      display.innerHTML+=i;
      display.innerHTML += "<br>";
      i++;
    }
}

function powers(num)
{
  display.innerHTML= "***Output**<br>";
    for(i =1; i <= num; i++)
    {
      display.innerHTML+=Math.pow(2,i);
      display.innerHTML += "<br>";
    }
}

function areWeThereYet()
{
  var there = "quit";
  display.innerHTML= "***Output**<br>";
  while(there != "yes")
  {
    there = prompt("areWeThereYet?")
    display.innerHTML= "areWeThereYet?<br>";
  }
  display.innerHTML= "Good<br>";

}

function triangle()
{
  display.innerHTML= "***Output**<br>";
 for(i = 1; i < 7; i++)
 {
      for(j = 1; j < i; j++)
      {
          display.innerHTML+="*";
      }
      display.innerHTML+="<br>";
  }
}

function tableSquare()
{
  display.innerHTML= "***Output**<br>A4x4tablesquare<br>";
 for(i = 1; i < 5; i++)
 {
      for(j = 1; j < 5; j++)
      {
          display.innerHTML+=" | " +i*j;
      }
      display.innerHTML+=" |<br>";
  }
}

function tableSquares(num)
{
  display.innerHTML= "***Output**<br>A"+num+"x"+num+"tablesquare<br>";
 for(i = 1; i < num+1; i++)
 {
      for(j = 1; j < num+1; j++)
      {
          display.innerHTML+=" | " +i*j;
      }
      display.innerHTML+=" |<br>";
  }
}
