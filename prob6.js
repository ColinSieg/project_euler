sumSqNat = 0
subSumNat = 0
iter = 101
const sumTotal = () => {
  for (i = 1; i < iter; i++) {
    sumSqNat = sumSqNat + Math.pow(i, 2)
  }
  for (i = 1; i < iter; i++) {
    subSumNat = subSumNat + i
  }
  sqSumNat = Math.pow(subSumNat, 2)
  console.log(`Answer is ${sqSumNat - sumSqNat}.`)
}

sumTotal()
