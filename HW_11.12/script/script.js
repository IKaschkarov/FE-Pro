//--------------------------------------------- Задача 1-------------------------------------------------------------------
// Продолжить функцию zoom() на экране у нас есть изображение размером w = 200, h = 200. при каждом клике изображения увеличивайте
// его размер на 50 (w+ = 50, h + = 50).
// Если в результате очередного клика размер изображения превышает 500, то во время всех последующих кликов уменьшайте размер изображения на 50.  Если в результате очередного клика размер изображения меньше 200, то во время всех последующих кликов увеличивать размер изображения на 50.

let image = document.querySelector(".image")
let width = 200
let height = 200
let isToggle = true

function zoom(){
	if(isToggle){
		width += 50
		height += 50
		if(width >= 500){
			isToggle = false
		}
	}else{
		width -= 50
		height -= 50
		if(width <= 200){
			isToggle = true
		}
	}
	image.style.width = `${width}px`
	image.style.height = `${height}px`

}


//--------------------------------------------- Задача 2 -------------------------------------------------------------------
// Задача состоит в создании формы выбора курсов для студента, где студент может выбрать различные модули: Frontend, Backend и Design,
// а затем выбрать конкретные курсы из каждого модуля. Каждый курс имеет свою стоимость. Студент также должен указать количество приобретаемых курсов.

// После выбора курсов и указания количества, при нажатии кнопки должна отобразиться общая стоимость выбранных курсов.
// Если общая стоимость превышает $3000, студенту предоставляется 30% скидка, и должна отобразиться окончательная сумма со скидкой.

// Например, если студент выбрал курсы JavaScript, PHP и Photoshop, каждый со своей стоимостью, и указал количество 12,
// то должна быть рассчитана общая стоимость ll и отображена на экране.
// Если общая стоимость превышает $3000, то должна быть применена скидка в размере 30%, и должна быть показана окончательная сумма со скидкой.

// Например, сообщение на экране может быть: "Уважаемый студент, вы должны заплатить $5400". Если общая стоимость превышает $3000,
// то сообщение может быть: "Уважаемый студент, вы должны заплатить $5400, но вы получаете 30% скидку, и окончательная сумма составляет $3780".
function buy(){
	const frontPrice = document.querySelector(".frontPrice").value
	const frontQuantity = document.querySelector(".frontQuantity").value

	const backPrice = document.querySelector(".backPrice").value
	const backQuantity = document.querySelector(".backQuantity").value

	const designPrice = document.querySelector(".designPrice").value
	const designQuantity = document.querySelector(".designQuantity").value

	let totalPrice = frontPrice * frontQuantity + backPrice * backQuantity + designPrice * designQuantity

	if (totalPrice > 3000) {
		totalPrice = totalPrice * 0.7 
		document.querySelector(".totalPrice").innerText = `Уважаемый студент, вы должны заплатить $${totalPrice.toFixed(2)}.
		 Вы получаете 30% скидку, и окончательная сумма составляет $${(totalPrice * 0.7).toFixed(2)}`
	} else {
		document.querySelector(".totalPrice").innerText = `Уважаемый студент, вы должны заплатить $${totalPrice.toFixed(2)}`
	}

    
}


//--------------------------------------------- Задача 3 -------------------------------------------------------------------
// Написать программу, которая перебирает все комбинации целых чисел i, j и k в диапазоне от 1 до 99 и проверяет, являются ли они сторонами прямоугольного треугольника по теореме Пифагора. Если i, j и k удовлетворяют теореме Пифагора (j * j + i * i === k * k), то программа выводит их значения.

for (let i = 1; i < 99; i++) {
	for (let j = 1; j < 99; j++) {
		for (let k = 1; k < 99; k++) {
			if (i ** 2 + j ** 2 === k ** 2) {
				console.log(i, j, k)
			}
		}
	}
}