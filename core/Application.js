import http from "http"
import EventEmitter from "events"

class Application {
    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._createServer();
        this.middlewares = [];
    }

    listen(port, callback) {
        this.server.listen(port, callback);
    }

    use(middleware) {
        this.middlewares.push(middleware)
    }

    addRouter(router){
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoints[path];
            Object.keys(endpoint).forEach(method => {
                const callback = endpoint[method];
                this.emitter.on(`[${path}]:[${method}]`, (req, res) => {
                    callback(req, res)
                })
            })
        })
    }

    _getEmitter(req, res) {
        const emitted = this.emitter.emit(this._getRouterMask(req.pathname, req.method), req, res)
        if (!emitted) {
            res.end('404')
        }
    }

    _createServer() {
        return http.createServer((req, res) => {

            let body = "";

            req.on('data', (chunk) => {
                body+=chunk;
            })

            req.on('end', () => {
                if (body) {
                    req.body = JSON.parse(body)
                }
                this.middlewares.forEach(middleware => middleware(req, res));
                this._getEmitter(req, res)
            })

        })
    }

    _getRouterMask(path, method) {
        return `[${path}]:[${method}]`;
    }
}

export default Application