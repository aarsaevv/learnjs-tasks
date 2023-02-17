const shuffle = array => {
  array.sort(() => Math.random() - 1/2)
}

let arr = [1, 2, 3]

shuffle(arr)
console.log(arr)