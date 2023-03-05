// Есть массив сообщений такой же, как и в предыдущем задании.

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

// Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?
// Нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.
// P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее.

let read = new WeakMap()

read.set(messages[2], new Date()

messages[2] = null;

// Few moments later
console.log(read) // empty