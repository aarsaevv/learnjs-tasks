const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i]
    if (number < a || number > b) {
      arr.splice(i, 1)
      i--
    }
  }

}

let arr = [5, 3, 8, 1]

filterRangeInPlace(arr, 1, 4)

console.log(arr)