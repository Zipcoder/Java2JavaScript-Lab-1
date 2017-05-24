'use strict'

export function tableSquare () {
  for (let i = 1; i <= 4; i++) {
    let column = ''
    for (let k = i; k <= i * 4; k += i) {
      column += ('| ' + k)
    }
    column += '|'
    console.log(column)
  }
}
