'use strict'

let hamster = {
  eat(food) {
    this.stomach.push(food)
  }
}

let speedy = {
  __proto__: hamster,
  stomach: [],
}

let lazy = {
  __proto__: hamster,
  stomach: [],
}

speedy.eat("apple")
lazy.eat("cucumber")
alert(speedy.stomach) // apple
alert(lazy.stomach) // cucumber

// Если рассуждать фактически, метод eat(food) добавляет еду в желудок прототипа
// Значит им нужно сделать свои желудки, чтобы не было совпадений.