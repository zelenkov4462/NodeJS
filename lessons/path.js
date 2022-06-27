const path = require("path");

// console.log(
//   "склеить участки пути вне зависимости операц системы",
//   path.join(__dirname, "first", "second")
// );

//  D:\Projects\NodeJS\lessons\first\second

// console.log(
//   path.join("Получить путь от корня приложения до текущего файла", __dirname)
// );

// \D:\Projects\NodeJS\lessons

// console.log(path.join("Подняться на 2 уровня вверх в адресе",__dirname, "..", ".."));

// console.log(
//   "Получить абсолютный путь",
//   path.resolve("first", "second", "third")
// );

// D:\Projects\NodeJS\lessons\first\second\third

const fullpath = path.resolve(__dirname, "first", "second.js");

// console.log("Парсинг пути", path.parse(fullpath));

// Парсинг пути {
// 	root: 'D:\\',
// 		dir: 'D:\\Projects\\NodeJS\\lessons\\first',
// 		base: 'second.js',
// 		ext: '.js',
// 		name: 'second'
// }

// console.log("Разделить (в какую сторону слеш) в ОС", path.sep);
// Разделить (в какую сторону слеш) в ОС \

// console.log("Проверка на абсолютный путь", path.isAbsolute("first/second"));
// Проверка на абсолютный путь false

// console.log("Название файла", path.basename(fullpath));
// Название файла second.js

// console.log("Расширение файла", path.extname(fullpath));
// Расширение файла .js

// -----------------------------------------------------

// const siteURL = "http://localhost:8000/users?id=5123";
//
// const url = new URL(siteURL);
//
// console.log(url);

// URL {
// 	href: 'http://localhost:8000/users?id=5123',
// 		origin: 'http://localhost:8000',
// 		protocol: 'http:',
// 		username: '',
// 		password: '',
// 		host: 'localhost:8000',
// 		hostname: 'localhost',
// 		port: '8000',
// 		pathname: '/users',
// 		search: '?id=5123',
// 		searchParams: URLSearchParams { 'id' => '5123' },
// 	hash: ''
// }
