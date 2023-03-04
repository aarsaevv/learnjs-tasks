// Рекурсивный подход

function fib(n) {
	if (n === 0 || n === 1) return n
	return fib(n - 1) + fib(n - 2)
}

// Формула Бине

function fib(n) {
	const rootFromFive = 2.23606797749979
	const a = (1 + rootFromFive) / 2
	return Math.floor(a ** n / rootFromFive)
}

console.log(fib(77))