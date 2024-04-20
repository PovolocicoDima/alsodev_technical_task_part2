import { describe, expect, it } from 'vitest'
import { uniqueWithSet, uniqueWithCycle } from '../src/case2'

describe('uniqueWithSet', () => {
  it('should return array with unique items', () => {
    const items = [1, 3, 2, 2, 4, 3, 5, 6, 5]
    expect(uniqueWithSet(items)).toStrictEqual([1, 2, 3, 4, 5, 6])
  })

  it('should return single item', () => {
    const items = [9, 9, 9, 9, 9]
    expect(uniqueWithSet(items)).toStrictEqual([9])
  })

  it('should return the same array', () => {
    const items = [1, 2, 3, 4, 5]
    expect(uniqueWithSet(items)).toStrictEqual(items)
  })
})

describe('uniqueWithCycle', () => {
  it('should return array with unique items', () => {
    const items = [1, 3, 2, 2, 4, 3, 5, 6, 5]
    expect(uniqueWithCycle(items)).toStrictEqual([1, 2, 3, 4, 5, 6])
  })

  it('should return single item', () => {
    const items = [9, 9, 9, 9, 9]
    expect(uniqueWithCycle(items)).toStrictEqual([9])
  })

  it('should return the same array', () => {
    const items = [1, 2, 3, 4, 5]
    expect(uniqueWithCycle(items)).toStrictEqual(items)
  })
})
