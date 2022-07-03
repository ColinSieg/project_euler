// Palindrome helper

const palindrome = (int) => {
  let first = String(int)
  let second = first.split('').reverse().join('')
  let paliString = `${first}${second}`
  return parseInt(paliString)
}

// Start big, go down from there

const factor = () => {
  let num = 999
  let found = false
  while (found === false) {
    num--
    let newPali = palindrome(num)
    for (i = 999; i > 99; i--) {
      if (newPali / i > 999 || i * i < newPali) {
        break
      }
      if (newPali % i === 0) {
        found = true
        console.log(`Answer is ${newPali}.`)
        console.log(`Factors are ${i} and ${newPali / i}.`)
        break
      }
    }
  }
}

factor()
