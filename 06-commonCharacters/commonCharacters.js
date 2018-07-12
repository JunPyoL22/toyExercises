/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  let resString = '';
  for (char of string2) {
    string1.indexOf(char) !== -1 ? resString += char : '';
  }
  return resString;
}

const commonChars = (...strings) => { 

  let commonChar  = ''

  for (char of strings[0]) {

    let isCommonChar = true
    for (let i=1; i<strings.length; i++) {

      strings[i].indexOf(char) === -1 ? isCommonChar = false : ''

    }

    if(isCommonChar) commonChar += char
  }

  return commonChar
}

//test

console.log(commonCharacters(`acexivou`, 'aegihobu'))
console.log(commonCharacters(`askfjqwoierjha`, 'aegihobu'))
console.log(commonCharacters(`qkjejnoiaf`, 'aegihobu'))
console.log(commonCharacters(`qoieurnmflk`, 'aegihobu'))

console.log(commonChars(`acexivou`, 'aegihobu',`askfjqwoierjha`))
