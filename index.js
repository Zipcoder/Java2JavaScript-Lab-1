'use strict'

import { loops } from './js/loops'
import { oddNumbers } from './js/oddNumbers'
import { squareNumbers } from './js/squareNumbers'
import { evenNumbers } from './js/evenNumbers'

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
}

main()
