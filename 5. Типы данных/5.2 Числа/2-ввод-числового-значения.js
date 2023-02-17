function readNumber() {
	let number

	do {
		number = prompt('Введите число', 0)
	} while(!isFinite(num))

	if(number === '' && number === null) return null

	return number
}

console.log(readNumber)