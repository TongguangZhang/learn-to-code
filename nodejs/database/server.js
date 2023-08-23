var mysql = require('mysql2');
var fs = require('fs');

var configData = fs.readFileSync('config.json');
var config = JSON.parse(configData);

var con = mysql.createConnection({
    host: "localhost",
    user: config.username,
    password: config.password
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
    con.query("CREATE DATABASE mydb", function (err, result) {
        if (err) throw err;
        console.log("Database created");
      });    
});