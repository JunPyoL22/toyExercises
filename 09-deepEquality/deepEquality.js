/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {

  return JSON.stringify(apple) === JSON.stringify(orange);
};
  
var deepEqualsRecursive = function(apple, orange) {

  let isDeepEqual = true
  for (let key in apple) {
    if (typeof apple[key] !== 'object') {
      if (apple[key] !== orange[key]) { 
        isDeepEqual = false
        return isDeepEqual 
      }
    } else {
      isDeepEqual = deepEqualsRecursive(apple[key], orange[key])
    }
  }
  return isDeepEqual
};

//test
console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}));
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); 
console.log(deepEquals({a:1, b: [4,5,6,7]},{a:1, b: [4,0,6,7]})); 

console.log(deepEqualsRecursive({a:1, b: {c:3}},{a:1, b: {c:3}}));
console.log(deepEqualsRecursive({a:1, b: {c:5}},{a:1, b: {c:6}})); 
console.log(deepEqualsRecursive({a:1, b: [4,5,6,7]},{a:1, b: [4,5,6,7]})); 
