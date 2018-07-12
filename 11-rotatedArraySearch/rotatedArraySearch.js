/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplcate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  // Your code here:
  let first = 0;
  let last = rotated.length - 1;
  let mid = Math.floor(last/2);

  const searchArray = (firstIndex, midIndex, lastIndex) => {
    if (rotated[midIndex] === target) return midIndex;
    if (firstIndex === lastIndex) { return null; }
    else {
     let direction = getSearchDirection(rotated, target, firstIndex, midIndex, lastIndex);
      if (direction === 'left') {
        return searchArray(firstIndex, Math.floor(midIndex/2), midIndex-1);
      } else { //right
        return searchArray(midIndex+1, Math.floor((lastIndex+midIndex+1)/2), lastIndex);
      }
    }
  };
  return searchArray(first, mid, last);
};


const getSearchDirection = (rotated, target, firstIndex, midIndex, lastIndex) => {
  let direction;
  if (rotated[midIndex] > target) { 
    direction = 'left';
    if (rotated[firstIndex] > target) {
      direction = 'right';
    }
  } else if (rotated[midIndex] < target) {
    direction = 'right';
    if (rotated[lastIndex] < target) {
      direction = 'left';
    }
  }
  return direction;
};

// console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5);
// console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100)); 
console.log(rotatedArraySearch([2, 3, 4, 5, 6, 0, 1], 0)); //1
console.log(rotatedArraySearch([6, 0, 1, 2, 3, 4, 5], 4)); //
