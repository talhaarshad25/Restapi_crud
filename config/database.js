
const {createpool} = require('mysql');

const pool = createpool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user:  process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10
});

module.exports = pool;