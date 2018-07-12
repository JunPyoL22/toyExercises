/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/

// Array.prototype.isSubsetOf = function (array) {
//   // Your code here
//   var isSubset, objectLoopFunc;

//   isSubset = true;
//   objectLoopFunc = function (obj) {
//     for (var key in obj) {
//       if (Array.isArray(obj[key])) {
//         for (var i=0; i<obj[key].length; i++) {
//           obj[key].isSubsetOf(arr);
//         } 
//       } else if (typeof obj[key] === 'object') {
//           objectLoopFunc(obj[key]);
//       } else {
//         isSubset = false; 
//       }          
//     }
//  };

//   for (var i=0; i<this.length; i++) {
//     if (!array.includes(this[i])) {
//       if (Array.isArray(this[i])) {
//         this[i].isSubsetOf(arr);
//       } else if (typeof this[i] === 'object') {
//         objectLoopFunc(this[i]);
//       } else {
//         isSubset = false;
//         return isSubset;
//       }
//     }  
//   }
//   return isSubset;
// };

Array.prototype.isSubsetOf = function (array) {
  // Your code here
  var isSubset;
  isSubset = true;
  this.forEach( function (element) {
    // console.log(element);
    if (!array.includes(element)) {
      isSubset = false;
      return;
    }
  });
  return isSubset;
};

//test
var a = ['commit','push'];
console.log(a.isSubsetOf(['commit','rebase','push','blame']));
var b = ['merge','reset','reset'];
console.log(b.isSubsetOf(['reset','merge','add','blame']));

var b = [1,3,5,9,3];
console.log(b.isSubsetOf([1,7,2,3,8,5]));
