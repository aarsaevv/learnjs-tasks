'use strict'

const sum = (a) => {
	let currSum = a

	function func(b) {
		currSum += b
		return func
	}

	func.valueOf = function() {
		return currSum
	}
	
	func.toString = function() {
		return String(currSum)
	}

	return func
}

console.log(parseInt(sum(1)(2))) // 3
console.log(parseInt(sum(1)(2)(3))) // 6
console.log(parseInt(sum(5)(-1)(2))) // 6
console.log(parseInt(sum(6)(-1)(-2)(-3))) // 0
console.log(parseInt(sum(0)(1)(2)(3)(4)(5))) // 15