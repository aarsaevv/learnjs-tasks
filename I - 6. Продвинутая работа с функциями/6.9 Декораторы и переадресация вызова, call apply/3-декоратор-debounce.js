'use strict'

function f(x) {
	console.log(x)
}

function debounce(f, ms) {
	let isResting = false

	return function() {
		if(isResting) return
		f.apply(this, arguments)
		isResting = true
		setTimeout(() => {
			isResting = false
		}, ms)
	}
}

let someFunction = debounce(f, 1000)

f(1) // выполняется немедленно
f(2) // проигнорирован

setTimeout( () => f(3), 100) // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100) // выполняется
setTimeout( () => f(5), 1500) // проигнорирован (прошло только 400 мс от последнего вызова)