let table = document.firstElementChild

for(let i = 1; i <= table.rows.length; i++) {
	let rows = table.rows[i]
	rows.cells[i].style.background.color = 'red'
}