const sortByAge = users => {
	users.sort((a, b) => {
		if (a.age > b.age) return 1
		if (a.age < b.age) return -1
		else return 0
	})
}

let vasya = { name: "Вася", age: 25 }
let petya = { name: "Петя", age: 30 }
let masha = { name: "Маша", age: 28 }

let arr = [ vasya, petya, masha ]

sortByAge(arr);

console.log(arr[0].name)
console.log(arr[1].name)
console.log(arr[2].name)