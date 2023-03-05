function Accumulator(startingValue) {
	this.value = startingValue
	this.read = function() {
		this.acc = +prompt("введите число")
		this.value += this.acc
	}
}

let accumulator = new Accumulator(1)

accumulator.read()
accumulator.read()

console.log(accumulator.value)