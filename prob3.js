const bigNum = 600851475143
let newBigNum = bigNum
let fact = 0
let count = 2

while (count * count <= newBigNum) {
  if (newBigNum % count === 0) {
    newBigNum = newBigNum / count
    fact = count
  } else {
    count++
  }
  if (newBigNum > fact) {
    fact = newBigNum
  }
}
console.log(`Answer is ${fact}.`)

// Old code, works, took too long

// // const problem = 600851475143
// // const bigNum = 600851475143
// // const factorArray = []

// // const factorCheck = () => {
// //   for (let i = 2; i <= bigNum / 2; i++) {
// //     if (bigNum % i === 0) {
// //       factorArray.push(i)
// //     }
// //   }
// // }
// // factorCheck()

// // const primeCheck = () => {
// //   primeArray = factorArray.filter((num) => {
// //     for (let i = 2; i <= Math.sqrt(num); i++) {
// //       if (num % i === 0) return false
// //     }
// //     return true
// //   })
// // }
// // primeCheck()
// // console.log(primeArray)
