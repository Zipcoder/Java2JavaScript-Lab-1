" use strict ";

var display = document.getElementById("display");

function oneToTen() {
    
    var result = "";
    for (var i = 1; i<=10; i++) {
        result += '<p>' + i + '</p>';
    }
    display.innerHTML = result;
}

function oddNumbers() {
    
    var result = "";
    for (var i = 1; i<=20; i++) {
        if (i % 2 != 0) {
            result += '<p>' + i + '</p>';
        }
    }
    display.innerHTML = result;
}

function squares() {
    
    var result = "";
    for (var i = 1; i<=10; i++) {
        result += '<p>' + i*i + '</p>';
    }
    display.innerHTML = result;
}

function random4() {
    
    var result = "";
    for (var i = 0; i<4; i++) {
        result += '<p>' + (Math.floor(Math.random() * (100 - 1)) + 1) + '</p>';
    }
    display.innerHTML = result;
}

function even(n) {
    
    var result = "<ol>";
    for (var i = 0; i < n; i++) {
        if (i % 2 == 0) {
            result += "<li>" + i + '</li>';
        }
    }
    result += "</ol>";
    display.innerHTML = result; 
}

function powers(n) {
    
    var result = "";
    var lastNumber = 1;
    for (var i = 2; i<n*2+1; i++) {
        
        if (i % 2 == 0) {
            var r = lastNumber * 2;
            result += "<p>" + r + "</p>"
            lastNumber = r;
        }
        
    }
    display.innerHTML = result;
}

function areWeThereYet() {
    
    var result = "";
    var thereYet = "";
    
    while (thereYet != "Yes") {
        result += '<p>"Arewethereyet?"</p>'
        thereYet = prompt("Are we there yet?");
        result += "<p>" + thereYet + "</p>";
        
    }
    display.innerHTML = result + "<p>Good!</p>";
}

function triangle() {
    
    var result = "";
    
    for (var i = 0; i<6; i++) {
        var line = "<p>";
        for (var j = 0; j<i; j++) {
            line += "*";
        }
        
        result += line + "</p>";
    }
    display.innerHTML = result;
}

function tableSquare() {
    
    var result = "";
    var index = 1;
    
    for (var i = 1; i<=4; i++) {
        var line = "<p>";
        for (var j = 0; j<4; j++) {
            if (index < 10) {
                line += "|" + " " +index + "|";
            } else {
                line += "|" + index + "|";
            }
            index++;
        }
        line += "</p>";
        result += line;
    }
    display.innerHTML = result;
}

function tableSquares(n) {
    
    var result = "";
    var index = 1;
    
    for (var i = 1; i<=n; i++) {
        var line = "<p>";
        for (var j = 0; j<n; j++) {
            if (index < 10) {
                line += "|" + " " +index + "|";
            } else {
                line += "|" + index + "|";
            }
            index++;
        }
        line += "</p>";
        result += line;
    }
    display.innerHTML = result;
}

