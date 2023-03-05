const getLastDayOfMonth = (year, month) => {
	return (new Date(year, month + 1, 0))
}

console.log(getLastDayOfMonth(2012, 1))