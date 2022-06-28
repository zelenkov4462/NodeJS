const Emitter = require("events");

const emitter = new Emitter();

// emitter.on("message", (data, second, third) => {
//   console.log("Вы прислали сообщение " + data);
//   console.log("Второй аргумент" + second);
// });
//
//
//Получение сообщения из переменных окружения
// const MESSAGE = process.env.message || "";
//
//Генерация событий - функция emit
// if (MESSAGE) {
//   emitter.emit("message", MESSAGE, 123);
// } else {
//   emitter.emit("message", "Вы не указали сообщение");
// }
//
//Когда удобно использовать?
// http
//websockets
//long pulling
//clusters
//
//
//
//Для того, чтобы событие выполнялось единыжды - once
// emitter.once("message", (data, second) => {
//   console.log("Вы прислали сообщение" + data);
//   console.log("Второй аргумент" + second);
// });
// const MESSAGE = process.env.message || "";

// emitter.emit("message");
// emitter.emit("message");
// emitter.emit("message");
// emitter.emit("message");
// emitter.emit("message");
// emitter.emit("message");
// emitter.emit("message");
//
//
//Вы прислали сообщениеundefined
// Второй аргументundefined
//
//
//Удалять все слушатели - removeAllListeners
//
//Удалять конкретный слушатель - removeListener

// const callback = (data, second) => {
//   console.log("Вы прислали сообщение" + data);
//   console.log("Второй аргумент" + second);
// };
//
// emitter.once("message", callback);
// emitter.emit("message");
// emitter.emit("message");
// emitter.emit("message");
// emitter.removeListener("message", callback);
