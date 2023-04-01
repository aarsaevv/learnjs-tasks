class FormatError extends SyntaxError {
  constructor(message) {
    super(message)
    this.name = "FormatError"
  }
}

let err = new FormatError("Ошибка форматирования")

console.log(err.message) // Ошибка форматирования
console.log(err.name) // FormatError
console.log(err.stack) // stack

console.log(err instanceof FormatError) // true
console.log(err instanceof SyntaxError) // true