'use strict'

let head = {
  glasses: 1,
}

let table = {
  __proto__: head,
  pen: 3,
}

let bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2,
}

let pockets = {
  __proto__: bed,
  money: 2000,
}

// Не факт, что какой-то из способов будет ощутимо быстрее. Но длинный путь(1) - pockets.glasses
// Поиск будет выполнен в порядке pockets => bed => table => head(1)
// Короткий путь(1) - head.glasses
// Так мы получим свойство напрямую.