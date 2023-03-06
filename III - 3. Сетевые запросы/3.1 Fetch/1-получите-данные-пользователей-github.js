'use strict'

async function getUsers(names) {
	let users = []

	for(let name of names) {

		let user = fetch(`https://api.github.com/users/${name}`)
		.then(res => res.json())
		.catch(e => console.error(e))
		users.push(user)
	}
	
	// Резолвим массив промисов и выводим консоль
	Promise.all(users).then((res) => console.log(res))
}

getUsers(['aarsaevv', 'numkms'])