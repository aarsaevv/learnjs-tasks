const getMaxSubSum = (arr) => {
  let maximumSum = 0
  let partialSum = 0

  for (let number of arr) {
    partialSum += number
    maximumSum = Math.max(maximumSum, partialSum)
    if (partialSum < 0) partialSum = 0
  }

  return maximumSum
}

console.log(getMaxSubSum([-1, 2, 3, -9]))
console.log(getMaxSubSum([2, -1, 2, 3, -9]))
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
console.log(getMaxSubSum([-2, -1, 1, 2]))
console.log(getMaxSubSum([100, -9, 2, -3, 5]))
console.log(getMaxSubSum([1, 2, 3]))
console.log(getMaxSubSum([-1, -2, -3]))