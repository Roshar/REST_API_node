const PORT = process.env.PORT || 3000;
const Router = require('./framework/Router')
const App = require('./framework/Application')

const app = new App();

const router = new Router();

router.get('/test1', (req, res) => {
    res.end('Welcome 1')
})

router.get('/test2', (req, res) => {
    res.end('Welcome 2')
})

app.addRouter(router)


app.listen(PORT, () => {console.log(`Сервер работает на ${PORT}`)})