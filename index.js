// const dotenv = require("dotenv");
// dotenv.config();

// console.log(process.env.PORT);
// console.log(process.env.NODE_ENV);

const http = require("http");
const EventEmitter = require("events");
const PORT = process.env.PORT || 5000;
const Router = require("./framework/Router");
const Application = require("./framework/Application");
const emitter = new EventEmitter();

//ServerSideRendering - мы на стороне сервера
// делаем разметку и отправляем на клиент
//
// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-type": "text/html; charset=utf-8",
//   });
//   res.end(`<h1>Hello world</h1>`);
// });
//
// server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
//
//
//
//res.end - позволяет отправлять полученные данные на клиент
//
//
// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "application/json",
//   });
//   if (req.url === "/users") {
//     return res.end(JSON.stringify([{ id: 1, name: "NIK" }]));
//   }
//   if (req.url === "/posts") {
//     return res.end("POSTS");
//   }
//   res.end(req.url);
// });
// server.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
//
//
// Но писать сервера через if else (как выше в примере) не удобно,
// пожтому используют фреймворки - типа Express
//
const app = new Application();

const router = new Router();

router.get("/users", (req, res) => {
  res.end("YOU SEND REQUEST TO /USERS");
});
router.get("/posts", (req, res) => {
  res.end("YOU SEND REQUEST TO /POSTS");
});

app.addRouter(router);

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
