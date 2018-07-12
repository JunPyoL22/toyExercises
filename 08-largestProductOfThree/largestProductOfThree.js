/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var firstTwoPrd;
  var lastIndex = array.length-1;

  arr = array.sort((a,b) => {
    return Math.abs(a) < Math.abs(b);
  });

  firstTwoPrd = arr[0]*arr[1];
  if (firstTwoPrd > 0) {
    for (let i = 2; i <= lastIndex; i++) {
      if (arr[i] > 0) { return firstTwoPrd*arr[i] } 
    }
  } else {
    return firstTwoPrd*arr[2];
  }
  return arr[lastIndex]*arr[lastIndex-1]*arr[lastIndex-2];
};

//test
console.log(largestProductOfThree([2,1,3,7]));
console.log(largestProductOfThree([-2,-1,-3,-7]));
console.log(largestProductOfThree([-6, -2,-1,-3,-7,-5]));
console.log(largestProductOfThree([-3,-7, 2, 5]));
