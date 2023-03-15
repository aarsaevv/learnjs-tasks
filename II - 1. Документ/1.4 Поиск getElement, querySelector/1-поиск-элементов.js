// 1. Таблицу с id="age-table"
document.getElementById("age-table")

// 2. Все элементы label внутри этой таблицы (их три)
let table = document.getElementById("age-table")
table.querySelectorAll("label")

// 3. Первый td в этой таблице (со словом «Age»)
let table = document.getElementById("age-table")
table.querySelector("td")

// 4. Форму form с именем name="search"
document.querySelector("form")

// 5. Первый input в этой форме
let form = document.querySelector("form")
form.querySelector("label > input")

// 6. Последний input в этой форме
let form = document.querySelector("form")
form.lastElementChild
