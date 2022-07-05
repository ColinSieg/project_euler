function smallestMultiple(n) {
  let increment = 2
  let step = 2
  let multiple = 2

  // Arbitrarily large number
  while (multiple <= Number.MAX_SAFE_INTEGER) {
    console.log(multiple)
    // Loop through values to determine if function breaks
    for (let i = 2; i <= n; i++) {
      console.log(`i is ${i}`)
      // n is arbitrary, general solution
      if (multiple % i === 0) {
        // Determine if function continues
        divisible = true
      } else {
        // Function breaks, highest multiple goes up by step, starts over with original i value in while loop
        console.log('Break')
        break
      }
      // Only runs if function doesn't break && i = increment, increment++
      if (i === increment) {
        step = multiple
        increment++
        console.log(
          `i ${i}, increment ${increment}, step ${step}, multiple ${multiple}`
        )
      }
      if (i === n) {
        // Return final value, end function, answer is:
        console.log(`Multiple ${multiple}`)
        return multiple
      }
    }
    multiple += step
  }
}
console.log(`Answer is ${smallestMultiple(20)}.`)
