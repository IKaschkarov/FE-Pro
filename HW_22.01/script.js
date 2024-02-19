//----------------------------   Задача 1  ---------------------------
// на понимание объектов, указан массив с данными пользователей
console.log("Задача 1")

const users = [
	{
		id: 1,
		username: "Jon",
		age: 20,
		status: "online",
		lastActivity: 0,
		salary: 150,
	},
	{
		id: 2,
		username: "Anna",
		age: 32,
		status: "offline",
		lastActivity: 25,
		salary: 300,
	},
	{
		id: 3,
		username: "Bob",
		age: 19,
		status: "offline",
		lastActivity: 120,
		salary: 100,
	},
	{
		id: 4,
		username: "David",
		age: 46,
		status: "online",
		lastActivity: 120,
		salary: 1500,
	},
	{
		id: 5,
		username: "Bill",
		age: 18,
		status: "offline",
		lastActivity: 8,
		salary: 2000,
	},
]

//getLoan - Отобразить только тех пользователей у кого зарплата больше 200$ и они старше 20 лет, так как банк остальным не одобряет кредит
function getLoan() {
	users.filter(user => user.salary > 200 && user.age > 20)
}
getLoan()

users.forEach(user => {
	if (user.age > 19 && user.salary > 200) {
		console.log(`Кредит одобрен для ${user.username}`)
	}
})
//getUserNames - Отобразить в console имена тех пользователей кто сейчас в сети

function getUserNames() {
	users.filter(user => user.status === "online")
}
getUserNames()

users.forEach(user => {
	if (users.status === "online") {
		console.log(`${user.username} сейчас онлайн`)
	}
	//getUserNames - Далее отобразить не только тех кто в онлайн, также добавить offline-пользователей у кого активность была не больше 10 минут назад, и рядом с offline вывести имена
	//    как в примере Jon 10 minutes ago

	users.forEach(user => {
		if (user.lastActivity > 1 && user.lastActivity < 10) {
			console.log(
				`${user.username} был в сети ${user.lastActivity} минут назад`
			)
		}
	}) // Я не понимаю почему в консоль 5 раз выводится "Bill был в сети 8 минут назад"
})

//------------------------------- Задача 2------------------------------------------

console.log("Задача 2")
//У вас есть класс Rectangle, представляющий прямоугольник. Ваша задача - добавить методы для вычисления площади и периметра прямоугольника.

class Rectangle {
	constructor(width, height) {
		this.width = width
		this.height = height
	}
	//calculateArea - Метод для вычисления площади прямоугольника

	calculateArea() {
		return this.width * this.height
	}

	//calculatePerimeter - Метод для вычисления периметра прямоугольника

	calculatePerimeter() {
		return 2 * (this.width + this.height)
	}
}
//Также создайте несколько экземпляров класса и выведите результаты в консоль.
let rectangle1 = new Rectangle(20, 15)
let rectangle2 = new Rectangle(2, 6)
let rectangle3 = new Rectangle(7, 14)

console.log("Прямоугольник 1:")
console.log("Площадь:", rectangle1.calculateArea())
console.log("Периметр:", rectangle1.calculatePerimeter())

console.log("Прямоугольник 2:")
console.log("Площадь:", rectangle2.calculateArea())
console.log("Периметр:", rectangle2.calculatePerimeter())

console.log("Прямоугольник 3:")
console.log("Площадь:", rectangle3.calculateArea())
console.log("Периметр:", rectangle3.calculatePerimeter())

//-----------------------------------   Задача 3 --------------------------

//Ваша задача - создать класс TrafficLight, представляющий светофор. У светофора есть три цвета: красный, желтый и зеленый. Реализуйте методы для переключения цветов светофора.

console.log("Задача 3")
class TrafficLight {
	constructor() {
		this.colors = ["red", "yellow", "green"]
		this.currentColorIndex = 0
	}

	//getCurrentColor - Метод для получения текущего цвета светофора

	getCurrentColor() {
		return this.colors[this.currentColorIndex]
	}
	//switchColor - Метод для переключения цвета светофора

	switchColor() {
		this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length
	}
}
const trafficLight = new TrafficLight() // экземпляр класса TrafficLight

console.log("Текущий цвет:", trafficLight.getCurrentColor())

trafficLight.switchColor()
console.log("Текущий цвет:", trafficLight.getCurrentColor())

trafficLight.switchColor()
console.log("Текущий цвет:", trafficLight.getCurrentColor())

trafficLight.switchColor()
console.log("Текущий цвет:", trafficLight.getCurrentColor())
