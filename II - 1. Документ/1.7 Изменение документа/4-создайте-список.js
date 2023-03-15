let ul = document.createElement('ul')
document.body.append(ul)

while(true) {
	let data = prompt('Введите содержимое элемента списка')
	if(data === '' || data === null) break

	let li = document.createElement('li')
	li.textContent = data
	ul.append(li)
}