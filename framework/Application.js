const http = require('http');
const EventEmitter = require('events');

module.exports = class Application {
    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._createServer()
    }

    listen(port, callback) {
        this.server.listen(port, callback)
    }

    // добавление роута c назначением события
    addRouter(router) {
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoints[path];
            Object.keys(endpoint).forEach((method) => {
                this.emitter.on(this._getRouteMask(path, method), (req, res) => {
                    const handler = endpoint[method];
                    handler(req, res)
                })
            })
        })
    }

    // приватный метод для создания сервера

    _createServer() {
        return http.createServer((req, res) => {
            const emitted = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res)
            console.log(this.emitter);
            if (!emitted) {
                res.end('no')
            }
        })
    }

    // маска для emit события

    _getRouteMask(path, method) {
        return `[${path}]:[${method}]`
    }
}