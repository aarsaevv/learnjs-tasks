'use strict'

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

// Решение с использованием цикла

function printListReverse(list) {
  // Никто не мешает нам получить элементы тем же способом,
  // и просто "перевернуть" массив
  let arr = []
  while(list) {
    arr.push(list.value)
    list = list.next
  }
  arr = arr.reverse()
  for(let entry of arr) {
    console.log(entry)
  }
}

// Решение через рекурсию

function printListReverse(list) {
  // Здесь достаточно сначала получить доступ к элементу с детьми,
  // и постепенно подняться наверх от последнего к первому
  if (list.next) printListReverse(list.next)
  if (list.value) console.log(list.value)
}

printListReverse(list)