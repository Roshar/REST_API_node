import user from '../models/users.js';

const getUsers = async (req, res) => {
    if (req.params.id) {
        return res.send(await user.getById(req.params.id))
    }
    res.send(await user.getAllUsers())
}


const createUser = async (req, res) => {
    const data = req.body;
    await user.create(data)
    res.send(req.body)
}

export default {
    getUsers,
    createUser,
}