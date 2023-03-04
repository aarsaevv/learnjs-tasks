let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      }
    }
  }
}

// Решение с использованием цикла

function printList(list) {
  while(list) {
    console.log(list.value)
    list = list.next
  }
}

// Решение через рекурсию

function printList(list) {
  if (list.value) console.log(list.value)
  if (list.next) printList(list.next)
}

printList(list)

// Вариант с рекурсией мне нравится больше, потому что предполагает под
// собой более компактный, понятный и красивый способ. Реализация подобного
// метода (он был наиболее подходящим) уже была в моей практике,
// когда я работал над фронтенд частью файлового менеджера на продакшне.