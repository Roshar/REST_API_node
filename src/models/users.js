import DB from '../../DB.js';

const getAllUsers = async () => {
    try{
        const db = await DB.connect();
        const [rows] = await db.query('SELECT * FROM users');
        return rows;
    } catch (e) {
        console.log(e)
    }
}

const getById = async (id) => {
    try{
        const db = await DB.connect();
        const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
        return rows;
    } catch (e) {
        console.log(e)
    }
}

const create = async (data) => {
    try{
        const db = await DB.connect();
        const [rows] = await db.execute('INSERT INTO users (name, password) VALUES (?,?)', [data.name, data.password]);
        return rows;
    } catch (e) {
        console.log(e)
    }
}

export default {
    getAllUsers,
    getById,
    create
}