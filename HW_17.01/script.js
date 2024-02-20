//Доделать то что на уроке начали, а именно добавить возможность отметить через checkbox, а в самом внизу отобразить количество отмеченных checkbox-ов.

let btn = document.querySelector(".btn-add")
let todoList = document.querySelector(".todo__list")
let counterElement = document.querySelector(".counter")

let todos = []

function createTodoItem(data = todos) {
	todoList.innerHTML = "" // чтобы не дублтровались старые строки при добавлении новых 
	let selectedCount = 0

	data.forEach(todo => {
		let liElement = document.createElement("li")
		liElement.classList.add("todo__item")

		let checkboxElement = document.createElement("input")
		checkboxElement.type = "checkbox"
		checkboxElement.checked = todo.completed

		checkboxElement.addEventListener("change", () =>
			toggleTodoItem(todo.id, checkboxElement)
		)

		let labelElement = document.createElement("label")
		labelElement.innerText = todo.label

		if (todo.completed) {
			labelElement.style.textDecoration = "line-through"
		}

		let buttonElelement = document.createElement("button")
		buttonElelement.classList.add("todo__remove")
		buttonElelement.innerText = "X"

		buttonElelement.addEventListener("click", () => removeTodoItem(todo.id))

		liElement.append(checkboxElement)
		liElement.append(labelElement)
		liElement.append(buttonElelement)
		todoList.append(liElement)

		if (todo.completed) {
			selectedCount++
		}
	})

	counterElement.textContent = selectedCount
}

function toggleTodoItem(id, checkboxElement) {
	todos = todos.map(todo => {
		if (todo.id === id) {
			todo.completed = checkboxElement.checked
		}
		return todo
	})

	createTodoItem()
}

function removeTodoItem(id) {
	todos = todos.filter(todo => todo.id !== id)
	createTodoItem()
}

function createNewTodo() {
	let label = document.querySelector(".todo__label").value
	todos.push({ id: Date.now(), label, completed: false })

	createTodoItem()
	document.querySelector(".todo__label").value = ""
}

btn.addEventListener("click", createNewTodo)
createTodoItem()