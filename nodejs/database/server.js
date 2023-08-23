var mysql = require('mysql2');
var fs = require('fs');

var configData = fs.readFileSync('config.json');
var config = JSON.parse(configData);

var con = mysql.createConnection({
    host: "localhost",
    user: config.username,
    password: config.password,
    database: 'mydb',
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
    var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table altered");
      });    
});