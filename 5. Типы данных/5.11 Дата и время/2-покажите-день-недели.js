const date = new Date(2012, 0, 3)

const week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

const getWeekDay = date => {
	let i = date.getDay()
	return week[i-1]
}

console.log(getWeekDay(date))