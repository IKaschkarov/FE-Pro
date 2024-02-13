// Создайте функцию, которая эмулирует асинхронное получение данных о книге по её ID из внешнего источника (например, API). Функция должна возвращать промис, который разрешится с информацией о книге через некоторое время.

const booksDatabase = {
  1: { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
  2: { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin' },
  3: { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma' }
};

function getBookInfoById(bookId) {
  return new Promise((resolve, reject) => {
   
    setTimeout(() => {
      const bookInfo = booksDatabase[bookId];//обращение к свойству объекта booksDatabase с ключом, который равен значению переменной bookId.
      if (bookInfo) { // если книга найдена, выполняется промис с информацией о книге
        resolve(bookInfo); 
      } else {
        reject(`Книга с ID ${bookId} не найдена`); //иначе промис с ошибкой отклоняется
      }
    }, 1000); 
  });
}


const bookId = 2;

getBookInfoById(bookId)
  .then(bookInfo => {
    console.log(`Информация о книге (ID ${bookId}):`);
    console.log(`Название: ${bookInfo.title}`);
    console.log(`Автор: ${bookInfo.author}`);
  })
  .catch(error => {
    console.error('Ошибка при получении информации о книге:', error);
  });