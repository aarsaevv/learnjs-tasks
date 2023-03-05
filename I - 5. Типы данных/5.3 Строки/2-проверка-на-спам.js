const checkSpam = (str) => {
	str = str.toLowerCase()
	return str.includes('viagra') || str.includes('xxx')
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))