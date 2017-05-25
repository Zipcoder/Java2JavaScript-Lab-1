'use strict'

import { loops } from './js/loops'
import { oddNumbers } from './js/oddNumbers'
import { squareNumbers } from './js/squareNumbers'
import { evenNumbers } from './js/evenNumbers'
import { powerOfTwo } from './js/powersOfTwo'
import { triangle } from './js/triangle'
import { tableSquare } from './js/tableSquare'
import { areWeThereYet } from './js/thereYet'

function main () {
  // Loops
  console.log('1 to 10')
  loops()

  // Odd Numbers
  console.log('\nOdd Numbers')
  oddNumbers()

  // Odd Numbers
  console.log('\nSquare Numbers')
  squareNumbers()

  // Odd Numbers
  console.log('\nEvenNumbers')
  evenNumbers(20)

  // Odd Numbers
  console.log('\nPowers of Two')
  powerOfTwo(8)

  // Triangle
  console.log('\nTriangle')
  triangle()

  // Table Squares
  console.log('\nTable Squares')
  tableSquare(6)

  // Are We There Yet
  console.log('\nAre We There Yet')
  areWeThereYet()
}

main()
