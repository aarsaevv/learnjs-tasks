let vasya = { name: "Вася", age: 25 }
let petya = { name: "Петя", age: 30 }
let masha = { name: "Маша", age: 29 }

let arr = [ vasya, petya, masha ]

const getAverageAge = users => {
	let result = null
	for(let user of users) {
		result += user.age
	}
	return result / users.length
}

console.log( getAverageAge(arr) )