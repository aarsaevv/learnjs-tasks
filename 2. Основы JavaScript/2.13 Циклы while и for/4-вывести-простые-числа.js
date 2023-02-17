let start = 2
let end = 100

nextPrimeNumber:
	for(let i = start; i <= end; i++) {
		for(let j = start; j < i; j++) {
			if(i % j === 0) continue nextPrimeNumber
		}
	console.log(i)
	}