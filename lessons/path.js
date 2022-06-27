const path = require("path");

// console.log(
//   "склеить участки пути вне зависимости операц системы",
//   path.join(__dirname, "first", "second")
// );

// console.log(path.join("Получить путь от корня приложения до текущего файла",__dirname));
// console.log(path.join("Подняться на 2 уровня вверх в адресе",__dirname, "..", ".."));

// console.log(
//   "Получить абсолютный путь",
//   path.resolve("first", "second", "third")
// );

const fullpath = path.resolve(__dirname, "first", "second.js");
// console.log("Парсинг пути", path.parse(fullpath));

// console.log("Разделить (в какую сторону слеш) в ОС", path.sep);

// console.log("Проверка на абсолютный путь", path.isAbsolute("first/second"));

// console.log("Название файла", path.basename(fullpath));

// console.log("Расширение файла", path.extname(fullpath));

// -----------------------------------------------------

const siteURL = "http://localhost:8000/users?id=5123";

const url = new URL(siteURL);

console.log(url);
