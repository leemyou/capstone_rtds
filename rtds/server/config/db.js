const mysql = require('mysql');


//mysql 연결
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'rtds',
});
connection.connect();
// module.exports = connection;