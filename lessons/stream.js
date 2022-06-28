// Если файл большой - то читаем файл стримом -
//отправляем по кусочкам(chunk) (1 кусочек - 64кБайт)
//
//
// 4 типа стримов:
// Readable - чтение по кусочкам
// Writable - запись по кусочкам
// Duplex - Для чтения и записи Readable + Writable
// Transform - Такой же как Duplex, но может изменить данные
// по мере чтения

const fs = require("fs");
const path = require("path");
//
//Как обычно читаются файлы:
//
// fs.readFile(
//   path.resolve(__dirname, "test.txt"),
//   { encoding: "utf-8" },
//   (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log(data);
//   }
// );
//
//
//Читаем с помощью стримов
//
// const stream = fs.createReadStream(path.resolve(__dirname, "test.txt"), {
//   encoding: "utf-8",
// });
//
//Стримы работают по принципу событий,
// поэтому колбэк выше не передавали
//
//Событие data - позволяет нам считывать файл
//
// stream.on("data", (chunk) => {
//   console.log(chunk);
// });
//
//
// <Buffer... 65486 more bytes>
// <Buffer... 65486 more bytes>
// <Buffer... 65486 more bytes>
// <Buffer... 65486 more bytes>
// <Buffer... 65486 more bytes>
// <Buffer... 65486 more bytes>
// <Buffer ... 7100 more bytes>
//
// stream.on("end", () => console.log("Закончили читать"));
// stream.on("open", () => console.log("Начали читать"));
// stream.on("error", (e) => console.log(e));
//
//
//
//
//Записываем по кусочкам с помощью стрима
//
// const writableStream = fs.createWriteStream(
//   path.resolve(__dirname, "test2.txt")
// );
// for (let i = 0; i < 20; i++) {
//   writableStream.write(i + "\n");
// }
// writableStream.end();
// //
// //
// writableStream.close();
// writableStream.destroy();
// writableStream.on("error");
//
//Когда работаем с http модулем
// res, req - это тоже стримы
//
const http = require("http");
// req - readable stream
// res - writable stream
http.createServer((req, res) => {
  const stream = fs.createReadStream(path.resolve(__dirname, "test.txt"));
  //
  //Сетевое подключение медленнее, чем чтение файла
  // Стрим закончит читать раньше, чем пользователь скачает
  //
  stream.pipe(res);
});

// stream.on("data", (chunk) => res.write(chunk));
// stream.on("end", (chunk) => res.end());
