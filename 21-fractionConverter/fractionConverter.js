/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

const getNumberOfDecimal = number => number.toString().length > 1 ? number.toString().split('.')[1].length : 1
const findHighestCommonFactor = (nomi, denomi) => {
  let num1 = nomi 
  let num2 = denomi 
  while(true) {
    if(!(num1%=num2)) return num2
    if(!(num2%=num1)) return num1
  }
}

const toFraction = function(number) {
  // Your code here
  const numberOfDecimal = getNumberOfDecimal(number)
  const nominator = Math.round(number*Math.pow(10, numberOfDecimal))
  const deNominator = Math.pow(10, numberOfDecimal)
  const hcf = findHighestCommonFactor(nominator, numberOfDecimal) 
  return nominator/hcf + '/' + deNominator/hcf 
}

// test
console.log(toFraction(0.5));
console.log(toFraction(3.0));
console.log(toFraction(2.5));
console.log(toFraction(3.50));
console.log(toFraction(2.45));
console.log(toFraction(1.25));
console.log(toFraction(2.56));
console.log(toFraction(0.185));

