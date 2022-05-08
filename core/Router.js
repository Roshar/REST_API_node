
class Router {
    constructor() {
        this.endpoints = {}
    }
    request(method = 'GET', path, callback) {

        if (!this.endpoints[path]) {
            this.endpoints[path] = {}
        }
        // /users [GET, POST, PUT, DELETE]
        const endpoint = this.endpoints[path];

        if (endpoint[method]) {
            throw new Error(`${method} у адреса ${path} уже есть`);
        }
        endpoint[method] = callback;
    }

    get(path, callback) {
        this.request('GET', path, callback);
    }
    post(path, callback) {
        this.request('POST', path, callback);
    }
    edit(path, callback) {
        this.request('PUT', path, callback);
    }
    delete(path, callback) {
        this.request('DELETE', path, callback);
    }
}

export default Router;
