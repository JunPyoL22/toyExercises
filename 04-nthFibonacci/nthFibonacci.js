/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

var nthFibonacci = function (n) {
  var lastTwoResult;
  
  if (n===0 || n===1) { return n; }
  
  lastTwoResult = [0, 1];
  for (var i=2; i<=n; i++) {
   lastTwoResult.push( lastTwoResult[0] + lastTwoResult[1] );
   lastTwoResult = lastTwoResult.slice(1);
  }
  return lastTwoResult[1];
};

//test
console.log(nthFibonacci(0));
console.log(nthFibonacci(1));
console.log(nthFibonacci(2));
console.log(nthFibonacci(3));
console.log(nthFibonacci(4));
console.log(nthFibonacci(5));
console.log(nthFibonacci(6));
console.log(nthFibonacci(7));
console.log(nthFibonacci(8));

