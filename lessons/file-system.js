// Файловая система - глобальный объект 'fs'
const fs = require("fs");
const path = require("path");
// const dotenv = require("dotenv");
// dotenv.config();
//
//
//...Работаем с синхронными операциями

// // создание папки в проекте
// fs.mkdirSync(path.resolve(__dirname, "dir"));

// создание пложенных папок
// fs.mkdirSync(path.resolve(__dirname, "dir", "dir2", "dir3"), {
//   recursive: true,
// });

//.... Работаем с асинхронным кодом

// Создание вложенных папок
// console.log("start");
// fs.mkdir(path.resolve(__dirname, "first"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Create directory");
// });
// console.log("end");
//
//
// Удаление папок
// Удалили папку созданную выше
// fs.rmdir(path.resolve(__dirname, "first"), (err) => {
//   if (err) {
//     throw err;
//   }
// });
//
//
//Создать файл и записать в него данные - writeFile
// Если в файле были данные - то они перезатрутся новыми данными
//
// fs.writeFile(
//   path.resolve(__dirname, "test.txt"),
//   "5 dfaf as d0 sd52 df",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("файл записан");
//   }
// );

// Если нужно дозаписать данные в файл use функцию - appendFile

// fs.appendFile(
//   path.resolve(__dirname, "test.txt"),
//   "Добавили в конец",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("Файл записан");
//
//   }
// );

// и т.к. appendFile и writeFile - асинхронные, то не понятно
// какая функция добавится в конец -
// - нужно вложить одну функцию в другую
// fs.writeFile(
//   path.resolve(__dirname, "test.txt"),
//   "5 dfaf as d0 sd52 df",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("файл записан");
//     fs.appendFile(
//       path.resolve(__dirname, "test.txt"),
//       "Добавили в конец текст",
//       (err) => {
//         if (err) {
//           throw err;
//         }
//         console.log("Файл записан");
//       }
//     );
//   }
// );
//
//
//
//В примере выше можно наблюдать "адд колбэков" -
// когда функции вложены друг в друга -
//поддерживать данный код очень трудно -
//
//В качестве решения используют - ПРОМИСЫ
//
//Записываем данные на диск, но use PROMISE
// const writeFileAsync = async () => {
//   return new Promise((resolve, reject) =>
//     fs.writeFile(path.resolve(__dirname, "test.txt"), (err) => {
//       if (err) {
//         return reject(err.message);
//       }
//       resolve();
//     })
//   );
// };

//Немного улучшаем код - делаем его переиспользуемым -
// в качестве аргументов передаем путь и данные для записи
// const writeFileAsync = async (path, data) => {
//   return new Promise((resolve, reject) =>
//     fs.writeFile(path, data, (err) => {
//       if (err) {
//         return reject(err.message);
//       }
//       resolve();
//     })
//   );
// };
//И функция для добавления данных
// const appendFileAsync = async (path, data) => {
//   return new Promise((resolve, reject) =>
//     fs.appendFile(path, data, (err) => {
//       if (err) {
//         return reject(err.message);
//       }
//       resolve();
//     })
//   );
// };
//
// writeFileAsync(path.resolve(__dirname, "test.txt"), "data")
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "123"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "456"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "7899"))
//   .catch((err) => console.log(err));
//
//
// СЧИТЫВАЕМ данные из файла
// const readFileAsync = async (path) => {
//   return new Promise((resolve, reject) =>
//     fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
//       if (err) {
//         return reject(err.message);
//       }
//       resolve(data);
//     })
//   );
// };

// writeFileAsync(path.resolve(__dirname, "test.txt"), "data")
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "123"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "456"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "7899"))
//   .then(() => readFileAsync(path.resolve(__dirname, "test.txt")))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
//
//
//Удаление файла с диска
// const removeFileAsync = async (path) => {
//   return new Promise((resolve, reject) =>
//     fs.rm(path, (err) => {
//       if (err) {
//         return reject(err.message);
//       }
//       resolve();
//     })
//   );
// };
//
// removeFileAsync(path.resolve(__dirname, "test.txt")).then(() =>
//   console.log("file was removed")
// );
//
//
//Задача -
// Через переменную окружения мы передаем строку,
// записываем ее в файл, потом этот файл мы считываем,
// считаем количество слов в этом файле и
// записываем их уже в другой файл,
// при этом первый файл мы удаляем
//
const text = process.env.TEXT || "";

const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

const readFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        return reject(err.message);
      }
      resolve(data);
    })
  );
};

const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.rm(path, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

writeFileAsync(path.resolve(__dirname, "test.txt"), text)
  .then(() => readFileAsync(path.resolve(__dirname, "test.txt")))
  .then((data) => data.split(" ").length)
  .then((count) =>
    writeFileAsync(path.resolve(__dirname, "count.txt"), `${count}`)
  )
  .then(() => removeFileAsync(path.resolve(__dirname, "test.txt")));
