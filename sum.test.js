const { sum } = require('./sum')

describe('Sum Component', () => {
    test("Component should sum two numbers", () => {
        expect(sum(2, 2)).toBe(4)
    })
})