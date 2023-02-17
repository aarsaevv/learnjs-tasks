const count = obj => {
	let counter = null
	for(let prop in obj) {
		counter++
	}
	return counter
}

let user = {
	name: 'John',
	age: 30
}

console.log(count(user))