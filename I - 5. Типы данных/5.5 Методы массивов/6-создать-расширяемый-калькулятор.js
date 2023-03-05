function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      operand = split[1],
      b = +split[2]

    if (!this.methods[operand] || isNaN(a) || isNaN(b)) {
      return NaN
    }

    return this.methods[operand](a, b)
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func
  };
}

let powerCalc = new Calculator
powerCalc.addMethod("*", (a, b) => a * b)
powerCalc.addMethod("/", (a, b) => a / b)
powerCalc.addMethod("**", (a, b) => a ** b)

let result = powerCalc.calculate("2 ** 3")
console.log(result)