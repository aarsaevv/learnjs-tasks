const formatDate = date => {
	let dayOfMonth = date.getDate()
	let month = date.getMonth() + 1
	let year = date.getFullYear()
	let hours = date.getHours()
	let minutes = date.getMinutes()

	deltaMs = new Date - date
	deltaSeconds = Math.round(deltaMs / 1000)
	deltaMinutes = deltaSeconds / 60
	deltaHours = deltaMinutes / 60

	if (deltaSeconds < 1) {
    	return 'прямо сейчас';
  	}
  	if (deltaMinutes < 1) {
    	return `${deltaSeconds} сек. назад`
  	}
  	if (deltaHours < 1) {
    	return `${deltaMinutes} мин. назад`
  	}
  	   	return `${dayOfMonth}.0${month}.${year}, ${hours}:${minutes}`
}

console.log(formatDate(new Date(new Date - 1)))
console.log(formatDate(new Date(new Date - 30 * 1000)))
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)))
console.log(formatDate(new Date(new Date - 86400 * 1000)))