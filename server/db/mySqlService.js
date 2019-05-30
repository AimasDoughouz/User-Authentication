const mysql = require('mysql');

//local mysql db connection
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'mydb'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


module.exports = connection;


