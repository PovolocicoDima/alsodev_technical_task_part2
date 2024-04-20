/**
 * First option
 * @param {number[]} arr
 * @returns {Boolean}
 */
export function checkOrderWithEvery(arr) {
  const minNumber = Math.min(...arr)
  const quessArr = []
  for (let i = 0; i < arr.length; i++) {
    quessArr.push(minNumber + i)
  }
  console.log(quessArr)

  return (
    arr.length === quessArr.length &&
    quessArr.every((item) => arr.includes(item))
  )
}

/**
 * Second option
 * @param {number[]} arr
 * @returns {Boolean}
 */
export function checkOrderWithSort(arr) {
  const sortedFirst = arr.slice().sort()
  const sortedSecond = []
  for (let i = sortedFirst[0] - 1; i < arr.length; i++) {
    sortedSecond.push(i + 1)
  }
  // console.log(sortedSecond)
  return (
    sortedFirst.length === sortedSecond.length &&
    JSON.stringify(sortedFirst) === JSON.stringify(sortedSecond)
  )
}
