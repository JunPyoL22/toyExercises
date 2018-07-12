/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input){

    var brackets = {'(':')', '{':'}', '[':']'};
    var closeBrackets = ')}]';
    var bracketStack = [];
    var isBalanced = false;

    for (var i in input) {
        if (brackets.hasOwnProperty(input[i])) {
            bracketStack.push(input[i]);
        } else if (closeBrackets.indexOf(input[i]) !== -1) {
            if (brackets[bracketStack.pop()] === input[i]) isBalanced = true;
            else isBalanced = false; 
        }
    }

    if (bracketStack.length !== 0) isBalanced = false;
    return isBalanced;
};

//test
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]')); // true
console.log(balancedParens('[(]{)}')); // false
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false
