//  Создать Rectangle класс как на примере Circle, наследуют от класса Shape и расширяют его функциональность для отображения конкретных фигур

// также добавить метод setStyle для родительского класса, принимает объект и применяет все стили которые есть в этом объекте

class Shape {
	constructor(className) {
		this.element = document.createElement("div")

		this.element.classList.add("shape", className) // добавляет классы созданному элементу
	}
	render() {
		document.querySelector(".container").append(this.element) //добавит созданный элемент в контейнер
	}
	setStyle(styles) {
		Object.assign(this.element.style, styles)//объединит 2 объекта
	}
}

class Circle extends Shape {
	constructor() {
		super("circle")
	}
}
class Rectangle extends Shape {
	constructor(className, width, height) {
		super(className)
		this.width = width
		this.height = height
		this.element.style.width = `${width}px`
		this.element.style.height = `${height}px`
	}
}

let rectangle = new Rectangle("rectangle", 100, 200)
rectangle.setStyle({background: "orange", borderRadius: "50px"})
rectangle.render()

let shape = new Shape('circle')
shape.render()



let circle = new Circle()
//circle.setStyle({ background: "orange", borderRadius: "50px" })
