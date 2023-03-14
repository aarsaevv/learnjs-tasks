'use strict'

function f(a) {
  console.log(a)
}

function throttle(f, ms) {

  let isThrottled = false
  let savedContext = null
  let savedArguments = null

  function wrapper() {

    if(isThrottled) {
      savedArguments = savedArguments
      savedContext = this
      return
    }

    f.apply(this, arguments)
    isThrottled = true

    setTimeout(function() {
      isThrottled = false
      if(savedArguments) {
        wrapper.apply(savedContext, savedArguments)
        savedArguments = null
        savedContext = null
      }
    }, ms)

  }

  return wrapper
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000)

f1000(1) // показывает 1
f1000(2) // (ограничение, 1000 мс ещё нет)
f1000(3) // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли...
// ...выводим 3, промежуточное значение 2 было проигнорировано