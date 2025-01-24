const pool = require('../config/database');

module.exports = {

    create: (data, callBack) => {
        pool.query(
            `insert into users(firstname, lastname, gender, email, password, number)`
            + `values(?,?,?,?,?,?)`,
            [
                /*data.firstname,
                data.lastname,
                data.*/
            ]
        )
    }
};