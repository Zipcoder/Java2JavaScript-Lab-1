'use strict'

export function triangle () {
  for (let i = 0; i < 6; i++) {
    let base = ''
    for (let k = 0; k < i; k++) {
      base += '*'
    }
    console.log(base)
  }
}
