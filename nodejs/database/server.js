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
    var sql = "SELECT name, address FROM customers";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(fields);
      });    
});