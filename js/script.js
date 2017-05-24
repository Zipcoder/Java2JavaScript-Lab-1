'use strict'

var display = document.getElementById('display')

function oneToTen () {
  var output = ''
  for (let i = 1; i <= 10; i++) {
    output += i + '<br />'
  }
  display.innerHTML = output
}

function oddNumbers () {
  var output = ''
  for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
      output += i + '<br />'
    }
  }
  display.innerHTML = output
}
function squareNumbers () {
  var output = ''
  for (let i = 1; i <= 10; i++) {
    output += Math.pow(i, 2) + '<br />'
  }
  display.innerHTML = output
}

function randomNumbers () {
  var output = ''
  for (let i = 0; i < 4; i++) {
    output += Math.floor((Math.random() * 100) + 1) + '<br />'
  }
  display.innerHTML = output
}

function evenNumbers (n) {
  var output = ''
  for (let i = 1; i < n; i++) {
    if (i % 2 === 0) {
      output += i + '<br />'
    }
  }
  display.innerHTML = output
}

function powers (n) {
  var output = ''
  for (let i = 1; i <= n; i++) {
    output += Math.pow(2, i) + '<br />'
  }
  display.innerHTML = output
}

function areWeThereYet () {
  var there = 'no'
  while (there !== 'Yes') {
    there = prompt('Are we there yet?')
  }
  display.innerHTML = 'Good!'
}

function triangle () {
  var output = ''
  for (let i = 1; i < 6; i++) {
    for (let j = 0; j < i; j++) {
      output += '*'
    }
    output += '<br />'
  }
  display.innerHTML = output
}

function tableSquareFour () {
  var output = ''
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
      output += '|' + i * j
    }
    output += '|<br />'
  }
  display.innerHTML = output
}

function tableSquare (n) {
  var output = ''
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      output += '|' + i * j
    }
    output += '|<br />'
  }
  display.innerHTML = output
}
