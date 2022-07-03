const fibsum = () => {
  n1 = 0
  n2 = 1
  sumAll = 0
  while (n1 < 4000000) {
    next = n1 + n2
    n1 = n2
    n2 = next
    if (n1 % 2 === 0) {
      sumAll = n1 + sumAll
    }
  }
  console.log(`Answer is ${sumAll}.`)
}

fibsum()
