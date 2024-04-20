import { describe, it, expect } from 'vitest'
import { checkOrderWithEvery, checkOrderWithSort } from '../src/case1'

describe('checkOrderWithEvery', () => {
  it('should return true', () => {
    const truthyArray = [5, 2, 3, 1, 4]
    expect(checkOrderWithEvery(truthyArray)).toBeTruthy()
  })

  it('should return false', () => {
    const falsyArray = [34, 23, 52, 12, 3]
    expect(checkOrderWithEvery(falsyArray)).toBeFalsy()
  })

  it('should return false', () => {
    const falsyArray = [7, 6, 5, 5, 3, 4]
    expect(checkOrderWithEvery(falsyArray)).toBeFalsy()
  })
})

describe('checkOrderWithSort', () => {
  it('should return true', () => {
    const truthyArray = [5, 2, 3, 1, 4]
    expect(checkOrderWithSort(truthyArray)).toBeTruthy()
  })

  it('should return true', () => {
    const falsyArray = [34, 23, 52, 12, 3]
    expect(checkOrderWithSort(falsyArray)).toBeFalsy()
  })

  it('should return true', () => {
    const falsyArray = [7, 6, 5, 5, 3, 4]
    expect(checkOrderWithSort(falsyArray)).toBeFalsy()
  })
})
