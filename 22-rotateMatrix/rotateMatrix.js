/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Important note:
 *   In mathematics, and generally in CS, matrices are identified as m-by-n, where m is
 *   the number of *rows* and n is the number of *columns*. So an [i][j] address in a matrix
 *   will be i places down, and j places over. This usually matches the way arrays are
 *   addressed in code, but keep in mind that it differs from use in geometry and computer
 *   graphics, where coordinates of the form (x,y) are usually x units over, and y units down.
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */

const rotateMatrix = (matrix, direction) => {
  // Your code here.
  // const rotated = JSON.parse(JSON.stringify(matrix))
  if (direction.length === 0) { return }
  const rotated = []
  const M = matrix.length - 1
  const N = matrix[0].length - 1

  for (let i=0; i<N+1; i++) {
    rotated.push(new Array(M + 1))
  }

  let col
  let row = 0

  for(let i=M; i>=0; i--) {

    col = 0

    for(let j=0; j<=N; j++) {

      if(direction ===  1) rotated[j][i] = matrix[row][col]
      if(direction === -1) rotated[N-j][row] = matrix[row][col]
      col ++

    }
    row ++
  }
  return rotated
}

//clockwise
// M:2, N:3
// (0,0) (0,1) (0,2) (0,3) => (0,2) (1,2) (2,2) (3,2) => 2 3 4 5
// (1,0) (1,1) (1,2) (1,3) => (0,1) (1,1) (2,1) (3,1) => 1 2 3 4
// (2,0) (2,1) (2,2) (2,3) => (0,0) (1,0) (2,0) (3,0) => 0 1 2 3

//counterClockwise
// M:2, N:3
// (0,0) (0,1) (0,2) (0,3) => (3,0) (2,0) (1,0) (0,0) 
// (1,0) (1,1) (1,2) (1,3) => (3,1) (2,1) (1,1) (0,1)  
// (2,0) (2,1) (2,2) (2,3) => (3,2) (2,2) (1,2) (0,2)  

var matrix = [
  [1,2,3],
  [5,6,7],
  [9,'A','B'],
  ['D','E','F']
]
console.log(matrix[0][0]) //1 
console.log(matrix[3][2]) //'F'
console.log(matrix)

var rotatedMatrix = rotateMatrix(matrix, 1) // Rotate 90 degrees clockwise

console.log(rotatedMatrix[0][0]) //'D'
console.log(rotatedMatrix[2][2]) //7
console.log(rotatedMatrix)
