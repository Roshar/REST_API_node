import App from "./core/Application.js"
import users from "./src/routes/users.js"
import parseJson from "./middleware/parseJson.js"
import parseUrl from "./middleware/parseUrl.js"
const PORT = process.env.PORT || 3000;
const baseUrl = process.env.URL || 'http://localhost';

const app = new App();
app.use(parseUrl(baseUrl))
app.use(parseJson)
app.addRouter(users)
app.listen(PORT)




