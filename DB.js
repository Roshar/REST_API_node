import mysql from "mysql2/promise";

class DB {
    static connect() {
        return mysql.createConnection({
            host: 'localhost',
            socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
            port: 8889,
            user: 'root',
            password: 'root',
            database: 'framework'
        });
    }
}

export default DB