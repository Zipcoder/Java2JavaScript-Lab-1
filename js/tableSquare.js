'use strict'

export function tableSquare (n) {
  for (let i = 1; i <= n; i++) {
    let column = ''
    for (let k = i; k <= i * n; k += i) {
      column += (' | ' + k)
    }
    column += ' | '
    console.log(column)
  }
}
