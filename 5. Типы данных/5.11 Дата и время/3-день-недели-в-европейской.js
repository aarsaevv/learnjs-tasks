let date = new Date(2012, 0, 3)

const getLocalDay = date => {
	let day = date.getDay()
	return day
}

console.log(getLocalDay(date))