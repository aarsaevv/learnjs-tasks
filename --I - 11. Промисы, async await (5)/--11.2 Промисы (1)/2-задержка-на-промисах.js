function delay(ms) {
	return new Promise(res => setTimeout(res, ms))
}

delay(3000).then(() => alert('выполнилось через 3 секунды'))