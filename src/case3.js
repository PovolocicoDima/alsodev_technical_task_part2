/**
 * First option
 * Function should return count for each item
 * @param {number[]} arr
 * @returns {object[]}
 */

export function splitUniqueWithHash(arr) {
  const result = {}
  let currentItem
  for (let i = 0; i < arr.length; i++) {
    currentItem = arr[i]
    result[currentItem] = result[currentItem] + 1 || 1
  }

  return Object.entries(result).map(([key, value]) => ({ [key]: value }))
}

/**
 * Second option
 * Function should return count for each item
 * @param {number[]} arr
 * @returns {object[]}
 */

export function splitUniqueWithReduce(arr) {
  const result = arr.reduce((acc, item) => {
    acc[item] = acc[item] + 1 || 1
    return acc
  }, {})

  return Object.entries(result).map(([key, value]) => ({ [key]: value }))
}
