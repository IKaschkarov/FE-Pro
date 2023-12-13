// Создать 3 input поле и также 4 кнопки, каждая кнопка будет выполнять определённое действие и будет вызывать свой метод

//---------------------------------- Задание 1 ---------------------------------
// Создать функцию checkEquality с помощью которого проверяем равны ли все 3 значение внутри input-ов или нет
// Например если 3, 3, 3 то в результате должны получать "Все поле равны" если нет то пишем "Все поле не равны"

function checkEquality() {
	let value1 = +document.querySelector(".input-1").value
	let value2 = +document.querySelector(".input-2").value
	let value3 = +document.querySelector(".input-3").value

	if (value1 === value2 && value2 === value3) {
		console.log("Все поля равны")
	} else {
		console.log("Все поля не равны")
	}
}

//---------------------------------- Задание 2 ---------------------------------
// Создать функцию hasZero с помощью которого проверяем есть ли поле которое равно 0 если есть пишем "Да, есть", если нет пишем просто "Нет"
// Например если будет 1, 2, 0 то результат будет "Да, есть", а если будет 1, 2, 3 то результат "Нет"

function hasZero() {
	let value1 = +document.querySelector(".input-1").value
	let value2 = +document.querySelector(".input-2").value
	let value3 = +document.querySelector(".input-3").value

	// 	if (value1 === 0 || value2 === 0 || value3 === 0) {
	// 		console.log("В одном из полей есть 0")
	// 	} else {
	// 		console.log("Ни в одном из полей нет 0")
	// 	}

	if (value1 === 0) {
		console.log(`В поле "Number 1" есть 0`)
	} else if (value2 === 0) {
		console.log(`В поле "Number 2" есть 0`)
	} else if (value3 === 0) {
		console.log(`В поле "Number 3" есть 0`)
	} else {
		console.log("Ни в одном из полей нет 0")
	}
}

//---------------------------------- Задание 3 ---------------------------------
// Создать функцию sameOne с помощью которого проверяем есть ли поле которое совпадают, если есть пишем "Да, есть", если нет пишем просто "Нет"
// Например если будет 1, 1, 0 то результат будет "Да, есть", а если будет 1, 2, 3 то результат "Нет"

function sameOne() {
	let value1 = +document.querySelector(".input-1").value
	let value2 = +document.querySelector(".input-2").value
	let value3 = +document.querySelector(".input-3").value

	if (value1 === value2) {
		console.log(`Поля "Number 1" и "Number 2" совпадают`)
	} else if (value2 === value3) {
		console.log(`Поля "Number 2" и "Number 3" совпадают`)
	} else if (value1 === value3) {
		console.log(`Поля "Number 1" и "Number 3" совпадают`)
	} else {
		console.log("Ни одно поле не совпадает")
	}
}
