const aclean = arr => {
  let map = new Map();

  for (let word of arr) {
    let sortedArray = word.toLowerCase().split("").sort().join("")
    map.set(sortedArray, word)
  }
  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr))