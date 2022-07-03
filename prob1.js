const sum = () => {
  total = 0
  for (i = 0; i < 1000; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
      total += i
    }
  }
  console.log(`Answer is ${total}.`)
}

sum()
