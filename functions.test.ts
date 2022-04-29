const {shuffleArray, arrCopy, array} = require('./utils')

describe('shuffleArray should', () => {
    test("should return an array", () => {
        expect(typeof shuffleArray).toBe('array')
    })

    test("should be the same length as the original", () => {
        expect(arrCopy).toHaveLength(array.length)
    })

    test("items have been shuffled", () => {
        expect(arrCopy[0]).not.toBe(array[0])
    })

})