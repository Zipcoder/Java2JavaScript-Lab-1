'use strict'

export function squareNumbers () {
  let base = 1
  for (let i = 1; i <= 100; i += base) {
    console.log(i)
    base += 2
  }
}
