// Модуль, который помогает
// взаимодействовать с операционной системой
const os = require("os");
//
//
//
//Импортируем модуль cluster - необходим для помощи
// однопоточному node.js приложению использовать
// все возможности многоядерного процессора компьютера
// и запускать дочерние операции параллельно,
// распределяя нагрузку между ядрами
//
const cluster = require("cluster");
//
//Получить текущую ОС - функция platform
// console.log(os.platform());
//
//win32
//
//Архитектура процессора
// console.log(os.arch());
//
//x64
//
//Получение массива описания ядра процессора - cpus и
// находим кол-во ядер - length
// console.log(os.cpus().length);
//
//12
//
//В зависимости от кол-ва ядер мы пожем
// распараллеливать задачи по ядрам
//
// const cpus = os.cpus();
//
// for (let i = 0; i < cpus.length - 2; i++) {
//   const CPUcore = cpus[i];
//   console.log("Запустить еще один NODE js процесс");
// }
//
// console.log(process.pid);
// Запустить еще один NODE js процесс
// Запустить еще один NODE js процесс
// Запустить еще один NODE js процесс
// Запустить еще один NODE js процесс
// Запустить еще один NODE js процесс
// Запустить еще один NODE js процесс
// Запустить еще один NODE js процесс
// Запустить еще один NODE js процесс
// Запустить еще один NODE js процесс
// Запустить еще один NODE js процесс
// 7672
//
//
// if (cluster.isMaster) {
//   for (let i = 0; i < os.cpus().length - 2; i++) {
//     cluster.fork();
//   }
//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`Воркер с pid= ${worker.process.pid} умер`);
//     if (code ===) {
// 	    cluster.fork()
//     } else {
// 	    console.log('Воркер умер...')
//     }
//   });
// } else {
//   console.log(`Воркер с pid= ${process.pid} запущен`);
//
//   setInterval(() => {
//     console.log(`Воркер с pid= ${process.pid} еще работает`);
//   }, 5000);
// }
