/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {

    let substr = str; 
    let resArr = [""]; 
    let start = 0;

    const strConcater = (concatedStr, toBeConcatedStr) => {
        if (toBeConcatedStr.length === 0) return  ;
        concatedStr = concatedStr + toBeConcatedStr[0];
        resArr.push(concatedStr);
        for (let i = 1; i < toBeConcatedStr.length; i++) {
            strConcater(concatedStr, toBeConcatedStr.slice(i));
        }
        return ;
    };

    while (str.length - 1 >= start) {
        substr = str.slice(start);
        resArr.push(str[start]);
        for (let i = 1; i < substr.length; i++) {
            strConcater(str[start], str.slice(start+i));
        }
        start ++;
    }
    return resArr;
};
//test
var ans1 = [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ];  
var ans2 = ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"];
console.log(powerSet("abc"));
console.log(powerSet("abc").length === ans1.length);
console.log(powerSet("jump"));
console.log(powerSet("jump").length === ans2.length);


