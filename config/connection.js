var mysql = require("mysql");

module.exports = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "meringue",
    database: "burgers_db"
});

