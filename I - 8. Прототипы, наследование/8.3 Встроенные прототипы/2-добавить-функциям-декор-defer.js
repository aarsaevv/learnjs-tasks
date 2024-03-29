'use strict'

Function.prototype.defer = function(ms) {
  let func = this
  return function(...args) {
    setTimeout(() => func.apply(this, args), ms)
  }
}

function func(a, b) {
  alert(a + b)
}

func.defer(1000)(1, 2) // выведет 3 через 1 секунду