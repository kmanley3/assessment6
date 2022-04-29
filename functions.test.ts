const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("should return an array", () => {
        expect(typeof shuffleArray).toBe('array')
    })

    test("should be the same length as the original", (arrCopy, array) => {
        expect(arrCopy).toHaveLength(array.length)
    })

    test("items have been shuffled", (arrCopy, array) => {
        expect(arrCopy[0]).not.toBe(array[0])
    })

})