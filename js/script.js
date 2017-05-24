" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}

function oneToTen() {
	var retString = ""
	for(i = 1; i < 11; i++) {
		retString += i + "<br />"
	}
	display.innerHTML = retString
};

function oddNumbers() {
	var retString = ""
	for(i = 0; i < 10; i++) {
		retString += (2*i + 1) + "<br />"
	}
	display.innerHTML = retString
};

function squares() {
	var retString = ""
	for(i = 1; i < 11; i++) {
		retString += (i*i) + "<br />"
	}
	display.innerHTML = retString
};

function random4() {
	var retString = ""
	for(i = 0; i < 4; i++) {
		retString += Math.round(100*Math.random()) + "<br />"
	}
	display.innerHTML = retString
}

function even(n) {
	var retString = ""
	if(n % 2 !== 0) {
		n++;
	}
	for(i = 2; i < n; i+=2) {
		retString += i + "<br />"
	}
	display.innerHTML = retString
}

function powers(n) {
	var retString = ""
	for(i = 1; i <= n; i++) {
		retString += Math.pow(2, i) + "<br />"
	}
	display.innerHTML = retString
}

function areWeThereYet() {
	//stubbed
}

function triangle() {
	var retString = ""
	for(i = 1; i < 6; i++) {
		for(j = 0; j < i; j++) {
			retString += "/*"
		}
		retString += "<br />"
	}
	display.innerHTML = retString
}

function tableSquare() {
	var retString = ""
	for(i = 1; i < 5; i++) {
		for(j = 0; j < 4; j++) {
			retString += "|" + (i + i*j);
		}
		retString += "|<br />"
	}
	display.innerHTML = retString
}

function tableSquares(n) {
	var retString = ""
	for(i = 1; i < n+1; i++) {
		for(j = 0; j < n; j++) {
			retString += "|" + (i + i*j);
		}
		retString += "|<br />"
	}
	display.innerHTML = retString
}














