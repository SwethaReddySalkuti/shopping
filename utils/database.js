const database = require('mysql2');

const pool = database.createPool({
    host : 'localhost',
    user : 'root',
    database : 'shopping',
    password : 'Swetha123@'
})

module.exports = pool.promise();