function Calculator() {
	this.read = function() {
		this.a = +prompt('a?', 0)
		this.b = +prompt('b?', 0)
	}
	this.sum = function() {
		return this.a + this.b
	}
	this.mul = function() {
		return this.a * this.b
	}
}

let calc = new Calculator()
calc.read()

console.log(`sum = ${calc.sum()}`)
console.log(`mul = ${calc.mul()}`)