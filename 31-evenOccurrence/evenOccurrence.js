/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

const evenOccurrence = arr => {

  const hash = {}
  const elementToIndex = {}

  arr.forEach(
    (element, i) => {
      elementToIndex[element] ? '' : elementToIndex[element] = i  
      hash[elementToIndex[element]] ? hash[elementToIndex[element]] += element : hash[elementToIndex[element]] = element
    }
  )

  for (let key in hash) {
    if(hash[key]/arr[key] === 2) return arr[key]
  }
  return null
}

const evenOccurrenceN2 = arr => {

  const hash = {}

  arr.forEach(
    (element, i) => {
      arr.slice(0, i).indexOf(element) !== -1 ? hash[arr.slice(0, i).indexOf(element)] = -1*element  : hash[i] = element 
    }
  )

  for (let key in hash) {
    if(hash[key] < 0) return -1*hash[key]
  }
  return null
}




console.log(evenOccurrenceN2([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]))
console.log(evenOccurrenceN2([1, 7, 7, 4, 5, 6, 8, 9, 6, 4]))

