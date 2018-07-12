/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */
var firstNonRepeatedCharacter = function (string) {
    // TODO: your solution here
    var countObj = {}
    for (var i=0; i<string.length; i++) {
        if (countObj.hasOwnProperty(string[i])) { 
          countObj[string[i]] ++ ; 
        } 
        else { 
          countObj[string[i]] = 1; 
        }
    }

    for (var j=0; j<string.length; j++) {
        if (countObj[string[j]] === 1) {
           return string[j]; 
        }
    }
 }


const firstNonRepeatedChar = string => {

  let uniqueCharArr = []
  let firstNonRepeatedCharIndex = 0

  const decidefirstNonRepeatedCharIndex = (char, i) => {
    uniqueCharArr[firstNonRepeatedCharIndex] === char ? firstNonRepeatedCharIndex ++ 
    : uniqueCharArr.push(char) 
  } 
  
  for (let i=0; i<string.length; i++) {
    i !== 0 ? decidefirstNonRepeatedCharIndex(string[i]) : uniqueCharArr.push(string[i])
  }
  return uniqueCharArr[firstNonRepeatedCharIndex]
}


//test//
// console.log(firstNonRepeatedCharacter('ABA'))
// console.log(firstNonRepeatedCharacter('AACDBD'))
console.log(firstNonRepeatedChar('ABA'))
console.log(firstNonRepeatedChar('ABCDA'))
console.log(firstNonRepeatedChar('AACBDB'))
console.log(firstNonRepeatedChar('ACCCCBDB'))
console.log(firstNonRepeatedChar('AABBCD'))
