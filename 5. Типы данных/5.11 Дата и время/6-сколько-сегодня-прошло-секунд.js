const getSecondsToday = () => {
	let date = new Date();
	let seconds = date.getSeconds() + (60 * date.getMinutes()) + (60 * 60 * date.getHours())
	return seconds
}

console.log(getSecondsToday())