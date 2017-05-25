'use strict'

export function areWeThereYet () {
  const stdin = process.openStdin()
  stdin.addListener('data', e => {
    const userInput = e.toString().toLowerCase()
    if (userInput.localeCompare('yes') >= 0) process.exit()
    console.log('Are we there yet')
  })
}
