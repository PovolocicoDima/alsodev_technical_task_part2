/**
 * First option
 * Function should return unique items
 * @param {number[]} arr
 * @returns {number[]}
 */

export function uniqueWithSet(arr) {
  return Array.from(new Set(arr)).sort()
}

/**
 * Second option
 * Function should return unique items
 * @param {number[]} arr
 * @returns {number[]}
 */

export function uniqueWithCycle(arr) {
  const result = {}
  let currentItem
  for (let i = 0; i < arr.length; i++) {
    currentItem = arr[i]
    result[currentItem] = 1
  }

  return Array.from(Object.keys(result), (i) => +i).sort()
}
