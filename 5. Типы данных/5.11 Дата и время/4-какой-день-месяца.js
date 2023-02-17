let date = new Date(2015, 0, 2)

const getDateAgo = (date, days) => {
	return new Date(new Date(date) - new Date(days) * 24 * 60 * 60 * 1000)
}

console.log(getDateAgo(date, 1))
console.log(getDateAgo(date, 2))
console.log(getDateAgo(date, 365))