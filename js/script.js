" use strict ";

var display = document.getElementById("display");

function oneToTen (){
  	var firstHeader = "oneToTen()"
	var filledString = ""
	for(var i = 1; i<11; i++){
		filledString += '<p>' + i + '</p>'
	}
	display.innerHTML = firstHeader + filledString
}

function oddNumbers(){
	var firstHeader = "oddNumbers()"
	var filledString = ""
	for(var i = 1; i<20; i++){
		if(i % 2 != 0 ){
			filledString += '<p>' + i  + '<br>' + '</p'
		}
	}
	display.innerHTML = firstHeader + filledString
}

function squares() {
	var firstHeader = "squares()"
	var filledString = ""
	for(var i = 1; i<11; i++) {
		filledString += '<p>' + i * i + '<br>' + '</p>'
	}
	display.innerHTML = firstHeader + filledString
}

function random(){
	var firstHeader = "random()"
	var filledString = ""

    for (var i = 1; i <= 4; i++) {
    	var num = Math.floor((Math.random() * 100) + 1)
			if (i < 4) {
                filledString = filledString + toString(num) + '<br>'
            } else {
                filledString = filledString + toString(num)
            }

    	}
		display.innerHTML = firstHeader + filledString
	}

function evenNumbers() {
	var firstHeader = "evenNumbers()"
	var filledString = ""
	for(var i = 1; i < 20; i++) {
		if(i%2 === 0) {
			filledString += '<p>' + i  + '<br>' + '</p'
		}
	}
	display.innerHTML = firstHeader + filledString
}

function powers() {
	var firstHeader = "powers()"
	var filledString = ""
	for(var i = 0; i <= 8; i++) {
		if(i<=8) {
			filledString +=  '<p>' + Math.pow(2, i)  + '<br>' + '</p'
		}
	}
	display.innerHTML = firstHeader + filledString
}

function areWeThereYet() {
	prompt("Are we there yet?")
		if("No") {
			prompt("Are we there yet?")
		}
		else if("Yes") {
			console.log("Good!")
		}
	}

function triangle(){
	var firstHeader = "triangle()"
	var triangle = ""	
	for(var i = 1; i<=6; i++) {
		for(var j = 1; j<i; j++) {
			triangle += "\\*"
		}
		triangle += "<br>"
	}
	display.innerHTML = firstHeader + triangle
}

function tableSquare(){
	var firstHeader = "tableSquare()"
	var tableString = ""
	var num
	for(var i = 1; i <= 4; i++) {
		tableString += "<br>"
		for(var j = 1; j <= 4; j++) { 
                tableString += "|"
                num = i * j
                tableString += ("\xa0" + num)
                if (num <= 9) {
					tableString += "\xa0"
				} 
                else if (num <= 16) {
					tableString += ""
				} 
			}
			tableString += "|"
		}
		display.innerHTML = firstHeader + tableString
	}

function tableSquares() {
	var firstHeader = "tableSquares()"
	var tableSquaresString = ""
	var num
	for (var i = 1; i <= 6; i++) {
            tableSquaresString += ("<br>")
            for (var j = 1; j <= 6; j++) {
                tableSquaresString += "|"
                num = i * j
                tableSquaresString += ("\xa0" + num)
                if (num <= 9) {
					tableSquaresString += "\xa0\xa0"
				} 
                else if (num < 10) {
					tableSquaresString += "\xa0"
				}
            }
			tableSquaresString += "|"
		}
		display.innerHTML = firstHeader + tableSquaresString
    }
