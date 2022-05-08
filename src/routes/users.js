import Router from '../../core/Router.js';
import UserController from '../controllers/users.js';

const router = new Router()

router.get('/', (req, res) => {
    res.send()
})

router.post('/users', UserController.createUser)

router.get('/users', UserController.getUsers )

router.get('/test', (req, res) =>{
    res.send()
})

export default router;
