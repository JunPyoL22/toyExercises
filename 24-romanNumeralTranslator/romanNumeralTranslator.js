
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
 
const translateRomanNumeral = romanNumeral => {

  // TODO: Implement me!
  let result = 0 
  let beforeNumber

  for(let i=0; i<romanNumeral.length; i++) {

    if(!DIGIT_VALUES[romanNumeral[i]]) return null

    if(i === 0) result = DIGIT_VALUES[romanNumeral[i]]
    else {

      if(DIGIT_VALUES[romanNumeral[i]] > beforeNumber) {
        result  -=  DIGIT_VALUES[romanNumeral[i]]
      }
      else result += DIGIT_VALUES[romanNumeral[i]]
      
    }
    beforeNumber = DIGIT_VALUES[romanNumeral[i]]
  }
  if(result < 0 ) return -result
  return result
}

console.log(translateRomanNumeral("IV"))
console.log(translateRomanNumeral("LXIV"))
