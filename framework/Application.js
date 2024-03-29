const http = require("http");
const EventEmitter = require("events");

module.exports = class Application {
  constructor() {
    this.emitter = new EventEmitter();
    this.server = this._createServer();
  }

  addRouter(router) {
    Object.keys(router.endpoints).forEach((path) => {
      const endpoint = router.endpoints[path];
      Object.keys(endpoint).forEach((method) => {
        const handler = endpoint[method];
        this.emitter.on(this._getRouteMask(path, method), (req, res) => {
          handler(req, res);
        });
      });
    });
  }

  listen(port, callback) {
    this.server.listen(port, callback);
  }

  _createServer() {
    return http.createServer((req, res) => {
      const emitted = this.emitter.emit(
        this._getRouteMask(req.url, req.method),
        req,
        res
      );
      if (!emitted) {
        res.end();
      }
      // res.end(req.url);
    });
  }

  _getRouteMask(path, method) {
    return `[${path}]:[${method}]`;
  }
};
