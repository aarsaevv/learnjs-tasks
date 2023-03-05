// Есть массив сообщений:

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let read = new WeakSet()

read.add(messages[0])
read.add(messages[1])

messages.shift()


// Few moments later
console.log(read) // empty