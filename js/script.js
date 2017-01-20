" use strict ";

var display = document.getElementById("display");



class Print {
  constructor(){
    this.container = ""
  }

  clearContainer(){
    this.container = ""
    return this
  }
  createTitle(title){
    this.container += title+"<br>***Output***<br>"
    return this
  }

  add(content){
    this.container += content
    return this
  }

  addBreak(){
    this.container +="<br>"
    return this
  }

  getDetails(){
    return this.container
  }

}

var print = new Print()

function oneToTen(){
  print.clearContainer().createTitle("oneToTen()")
  for (var i = 1; i <= 10; i++) {
    print.add(i).addBreak()
  }
  display.innerHTML = print.getDetails()
}

function oddNumbers(){
  print.clearContainer()
  print.createTitle("oddNumbers()")
  for (var i = 1; i < 20; i+=2) {
    print.add(i).addBreak()
  }
  display.innerHTML = print.getDetails()
}


function squares(){
  print.clearContainer()
  print.createTitle("squares()")
  for (var i = 1; i*i <= 100; i++) {
    print.add(i*i).addBreak()
  }
  display.innerHTML = print.getDetails()
}

function random4(){
  print.clearContainer()
  print.createTitle("random4()")
  for (var i = 1; i <= 4; i++) {
    print.add(Math.floor(Math.random() * 100) + 1).addBreak()
  }
  display.innerHTML = print.getDetails()
}


function even(n){
  print.clearContainer()
  print.createTitle("even()")
  for (var i = 2; i < n; i+=2) {
    print.add(i).addBreak()
  }
  display.innerHTML= print.getDetails()
}

function powers(n){
  print.clearContainer()
  print.createTitle("powers("+n+")")
  for (var i = 1; i <= n; i++) {
    print.add(Math.pow(2,i)).addBreak()
  }
  display.innerHTML = print.getDetails()
}

function areWeThereYet(){
  print.clearContainer()
  do{
    print.add("Arewethereyet?").addBreak()
    answer = prompt("Are we there yet?", "Well are we?")
    print.add(answer).addBreak()
  } while(answer!=="Yes")
  print.add("Good!")
  display.innerHTML = print.getDetails()
}

function triangle(){
  print.clearContainer()
  print.createTitle("triangle()")
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j <= i; j++){
       print.add("*")
    }
      print.addBreak()
  }
  display.innerHTML = print.getDetails()
}

function tableSquare(){
  print.clearContainer()
  print.createTitle("tableSquare()").add("A4x4tablesquare").addBreak()
  for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= 4; j++){
      if ((i*j)<10){
        print.add("|&nbsp&nbsp"+(i*j))
      } else {
        print.add("|"+(i*j))
      }
    }
      print.add("|").addBreak()
  }
  display.innerHTML = print.getDetails()
}

function tableSquares(n){
  print.clearContainer()
  print.createTitle("tableSquare()").add("A"+n+"x"+n+"tablesquare").addBreak()
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++){
      if ((i*j)<10){
        print.add("|&nbsp&nbsp"+(i*j))
      } else {
        print.add("|"+(i*j))
      }
    }
      print.add("|").addBreak()
  }
  display.innerHTML = print.getDetails()
}
