/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 10
 */

// Solved in O(n) time with O(1) memory
const sumArray = array => {

  let lastIndex = array.length
  let sum = 0
  let sumRest = 0 
  let tempSum
  
  for (let i=0; i<lastIndex; i++) array[i]<0 ? lastIndex = i : sum += array[i] 
  if (lastIndex === array.length) return sum 
  if (sum === 0) return array[0]

  tempSum = array[lastIndex] 

  for (let j=lastIndex + 1; j<array.length; j++) {
    tempSum += array[j]
    if(tempSum>0) sumRest = tempSum 
  }
  return sum + sumRest
}

console.log(sumArray([1, 2, 3, -4, 5, -7, 9]))
console.log(sumArray([1, 2, 3])) // => 6
console.log(sumArray([1, 2, 3, -4])) // 6
console.log(sumArray([1, 2, 3, -4, 5])) // 7
console.log(sumArray([4, -1, 5]))
console.log(sumArray([10, -11, 11]))
console.log(sumArray([-10, -11, -13]))


