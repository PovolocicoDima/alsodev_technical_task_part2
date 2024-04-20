import { describe, it, expect } from 'vitest'
import { splitUniqueWithHash, splitUniqueWithReduce } from '../src/case3'

describe('splitUniqueWithHash', () => {
  it('should return array of counts for each item in array', () => {
    const items = [1, 3, 2, 2, 4, 3, 5, 6, 5]
    expect(splitUniqueWithHash(items)).toStrictEqual([
      { 1: 1 },
      { 2: 2 },
      { 3: 2 },
      { 4: 1 },
      { 5: 2 },
      { 6: 1 },
    ])
  })
})

describe('splitUniqueWithReduce', () => {
  it('should return array of counts for each item in array', () => {
    const items = [1, 3, 2, 2, 4, 3, 5, 6, 5]
    expect(splitUniqueWithReduce(items)).toStrictEqual([
      { 1: 1 },
      { 2: 2 },
      { 3: 2 },
      { 4: 1 },
      { 5: 2 },
      { 6: 1 },
    ])
  })
})
