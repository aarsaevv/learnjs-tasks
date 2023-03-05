let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}

const sumSalaries = salaries => {
	let sum = 0
	for(let key in salaries) {
		sum += salaries[key]
	}
	return sum
}

console.log(sumSalaries(salaries))