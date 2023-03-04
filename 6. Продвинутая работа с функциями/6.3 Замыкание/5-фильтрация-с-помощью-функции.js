const inBetween = (a, b) => {
	return (x) => {
		return (x >= a && x <= b)
	}
}

const inArray = arr => {
	return (x) => {
		return arr.includes(x)
	}
}

let arr = [1,2,3,4,5,6,7]
console.log(arr.filter(inBetween(3, 6)))
console.log(arr.filter(inArray([1, 2, 10])))