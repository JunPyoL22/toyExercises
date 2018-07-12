/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (round) {
  // TODO: your solution here
  var generateSequenceFunc,
      rockPaperScissor,
      sequenceContainer;

  var round = round || 3; 
  rockPaperScissor = ['rock','paper','scissors'];
  
  playFuncByRound = function (round) {
    var roundCountainer = [];
    if (round === 1) {
      roundCountainer.push([rockPaperScissor[0]]);
      roundCountainer.push([rockPaperScissor[1]]);
      roundCountainer.push([rockPaperScissor[2]]);
      return roundCountainer;
    }
    for (var i=0; i<Math.pow(rockPaperScissor.length, round-1); i++) {
      roundCountainer.push(sequenceContainer[i].concat([rockPaperScissor[0]]));
      roundCountainer.push(sequenceContainer[i].concat([rockPaperScissor[1]]));
      roundCountainer.push(sequenceContainer[i].concat([rockPaperScissor[2]]));
    }
    return roundCountainer;
  };

  for (var i=1; i<=round; i++) {
    sequenceContainer = playFuncByRound(i);
  }
  return sequenceContainer;
};
// tset
// res = rockPaperScissors(3);
// console.log(res, res.length);
