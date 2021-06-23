const { sum } = require('./calculator')

it('should sum 2 + 2 with result 4', () => {
  expect(sum(2, 2)).toEqual(4)
})

it('should sum 2 + 2 even if one of then is a string, with result 4', () => {
  expect(sum('2', 2)).toEqual(4)
})

it('should throw an error when what is provided is not a number', () => {
  expect(() => {
    sum('', '2')
  }).toThrowError()
})
