// --------------- Задание 1 --------------------------

// Функция subtract() будет выполнять вычитание двух чисел и возвращать результат.
// Получает значения из двух input-полей
// Преобразует полученные значения в числа с помощью Number() или +.
// Выполняет вычитание (-) второго числа из первого и сохраняет результат в переменную result.
// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат вычитания.
// Пример если input1 = 8, input2 = 4 то результат будет: Результат: 8 - 4 = 4

function subtract() {
	let currentValue1 = +document.querySelector(".input-1").value
	let currentValue2 = +document.querySelector(".input-2").value
	let result = currentValue1 - currentValue2

	console.log(
		`input1 = ${currentValue1}, input2 = ${currentValue2}; 
      result: ${currentValue1} - ${currentValue2} = ${result}`
	)
}

// --------------- Задание 2 --------------------------

// Функция multiply() будет выполнять умножение двух чисел и возвращать результат.
// Получает значения из двух input-полей
// Преобразует полученные значения в числа с помощью Number() или +.
// Выполняет умножение (*) первого числа на второе и сохраняет результат в переменную result.
// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат умножения.
// Пример если input1 = 3, input2 = 4 то результат будет: Результат: 3 * 4 = 12

function multiply() {
	let currentValue3 = +document.querySelector(".input-3").value
	let currentValue4 = +document.querySelector(".input-4").value
	let result = currentValue3 * currentValue4

	console.log(`input-3 = ${currentValue3}, input-4 = ${currentValue4};
result: ${currentValue3} * ${currentValue4} = ${result}`)
}

// --------------- Задание 3 --------------------------

// Функция divide() будет выполнять деление двух чисел и возвращать результат.
// Получает значения из двух input-полей
// Преобразует полученные значения в числа с помощью Number() или +.
// Выполняет деление (/) первого числа на второе и сохраняет результат в переменную result.
// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат деления.
// Пример если input1 = 8, input2 = 4 то результат будет: Результат: 8 / 4 = 2

function divide() {
	let currentValue5 = +document.querySelector(".input-5").value
	let currentValue6 = +document.querySelector(".input-6").value
	let result = (currentValue5 / currentValue6).toFixed(2)

	console.log(`input-5 = ${currentValue5}, input-6 = ${currentValue6};
result: ${currentValue5} * ${currentValue6} = ${result}`)
}

//--------------- Задание 4 --------------------------

// Функция getMinutes() будет получать количество часов и возвращать количество минут
// Получает значения из одного input-поле
// Преобразует полученные значение в число с помощью Number() или +.
// Преобразует введенное число в минуты
// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат.
// Пример если input = 2 то результат будет: Результат: 2 часа = 120 минут

function getMinutes() {
	let currentValueHours = +document.querySelector(".input").value
	let minutes = 60
	let valueMinutes = currentValueHours * minutes

	console.log(
		`input = ${currentValueHours}, result: ${currentValueHours} hours = ${valueMinutes} minutes`
	)
}

// --------------- Задание 5 --------------------------

// Функция calculateAverage() будет показывать среднее значение из трех чисел
// Эта функция получает значения из трех input-полей
// Преобразует полученные значение в число с помощью Number() или +.
// Вычисляет среднее значение, разделив сумму чисел на их количество
// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат.
// Пример если input1 = 5, input2 = 2, input3 = 8 то результат будет: Среднее значение от: 5 + 2 + 8 = 15 / 3 = 5

function calculateAverage() {
	let currentValue7 = +document.querySelector(".input-7").value
	let currentValue8 = +document.querySelector(".input-8").value
	let currentValue9 = +document.querySelector(".input-9").value

	let overallResult = currentValue7 + currentValue8 + currentValue9
	let result = (overallResult / 3).toFixed(2)

	console.log(
		`input-7 = ${currentValue7}, input-8 = ${currentValue8}, input-9 = ${currentValue9};
      The average value of: ${currentValue7} + ${currentValue8} + ${currentValue9} = ${overallResult} / 3 = ${result}`
	)
}
