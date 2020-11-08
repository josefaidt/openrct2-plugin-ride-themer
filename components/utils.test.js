import { generateTextLength } from './utils'

describe('Utilities', () => {
  it('should return text length of 70 for `Hello, World!`', () => {
    const text = 'Hello, World!'
    expect(generateTextLength(text)).toEqual(70)
  })
})
