/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Introduce i into the global scope so we can test function efficiency
var i;

// Feel free to add helper functions if needed.


const bubbleSort = arr => {
  // Your code here.
  let swappedArr
  let isAleardySorted
  let backwardIndex

  isAleardySorted = 0  //1: false, 0: true
  
  for (i = 0; i < arr.length-1; i++) {

    backwardIndex = arr.length - 1

    for (let j = i+1; j < arr.length; j++) {

      if (arr[i] > arr[j]) {
        swappedArr = swap(arr[i], arr[j])
        arr[i] = swappedArr[0]
        arr[j] = swappedArr[1]
      }

      if (arr[backwardIndex] < arr[backwardIndex-1]) isAleardySorted ++ 

      backwardIndex -- 
    }
    if (isAleardySorted === 0)  return  
  }
};

const swap = (large, small) => {
  let temp
  temp = small
  small = large
  large = temp
  return [large, small];
}

//test
testArr1 = [10,3,1,5,4];
testArr2 = [2,3,1,8,4,6];

bubbleSort(testArr1);
bubbleSort(testArr2);
console.log(testArr1);
console.log(testArr2);

// var a = 15;
// var b = 11;
// var c, d;
// arr = swap(a,b);
// c = arr[0];
// d = arr[1];
// console.log(a,b, "15,11");
// console.log(c,d, "11,15");
