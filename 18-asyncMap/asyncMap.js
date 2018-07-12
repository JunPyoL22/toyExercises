'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */
function async_Map(iterator, callback) {
  var results = [];
  var count = iterator.length;
  for (var i = count; i--;) {
    // console.log(i);
    console.log(i)
    iterator[i](function (val) {
      results[i] = val;
      !--count ? callback(results) : ''
    })
    // (function (i) {
    // })(i)
  }
}

var asyncMap = (tasks, callback) => {
    const result = [];
    if(!tasks.length) return callback(result)
    // tasks.map((task, i) => {
    for (let i = tasks.length; i>0; i--) { 
      console.log(i)
      tasks[i-1](val => {
        result[i-1] = val;
        !--tasks.length ? callback(result) : ''
        // result.includes(undefined) ? '' : callback(result) ;
      })
    }
};


//test
async_Map([
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
  },
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
],
 function(results, i){
   console.log(results); // ['one', 'two']
 }
);

async_Map([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
  function(cb){
    setTimeout(function(){
     cb('two');
    }, 100);
  }
 ],
 function(results, i){
   console.log(results); // ['one', 'two']
 }
);
