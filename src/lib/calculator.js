function sum(a, b) {
  const i1 = parseInt(a, 10)
  const i2 = parseInt(b, 10)

  if (Number.isNaN(i1) || Number.isNaN(i2)) {
    throw new Error('Please provide either numbers or number-convertible strings.')
  }

  console.log(i1, i2)
  return i1 + i2
}

module.exports = { sum }
