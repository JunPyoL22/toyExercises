/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


const characterFrequency = string => {

  const freqStore = {}
  let numChar = 0

  string.forEach(
    (char, i) => {
      freqStore[char] ? freqStore[char] = 1 && numChar ++ : freqStore[char] += 1
    }
  )

  const result = new Array(numChar)

  for (let char of freqStore) {
  }

  return result
};

const storeInOrder = (char, freq, storeArr) => {
  for (let arr of storeArr) {
    if(arr === undefined) storeArr[0] = [char, freq]
    else if(freq > arr[1]) {

    }
    else if(freq === arr[1]) {

    }
    else if(freq < arr[1])
  }
  return storeArr
} 
