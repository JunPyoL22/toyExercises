/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  // TODO: Your code here!
  var longestChar = string[0];
  var longestNumber = 0;
  var charStorage = {};
  for (var i in string){
    var char = string[i];
    if(charStorage.hasOwnProperty(char)) {
      charStorage[char][1] = i ;
    } else {
      charStorage[char] = [i, i];
    }
    if (longestNumber < (charStorage[char][1]-charStorage[char][0])) { 
      longestNumber = charStorage[char][1]-charStorage[char][0]; 
      longestChar = char;
    }
  }
  return charStorage[longestChar];
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for(var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

console.log(longestRun("abbbcc")); // [1, 3]
console.log(longestRun("aabbc"));  // [0, 1]
console.log(longestRun("abcd"));   // [0, 0]
