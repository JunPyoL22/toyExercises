/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function (array, target) {
    let midIndex = Math.floor(array.length/2);
    const searchFunc = (first, last) => {
       let mid = Math.floor((first + last) /2);
       if (array[mid] === target) return mid;
       if (target > array[mid]) {
        return searchFunc(mid+1, last);
        } else {
        return searchFunc(0, mid);
        }
    };

    if (target === array[midIndex]) return midIndex;
    if (target > array[midIndex]) {
        return searchFunc(midIndex+1, array.length-1);
    } else {
        return searchFunc(0, midIndex);
    }

};

//test
var index = binarySearch([1, 2, 3, 4, 5], 5);
console.log(index);
