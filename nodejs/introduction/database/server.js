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
    var name = 'Amy';
    var address = 'Mountain 21';
    // ? is a placeholder used to escape values to prevent hacking or db misuse from SQL injections
    var sql = "SELECT * FROM customers WHERE name = ? OR address = ?";
    con.query(sql, [name, address], function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });    
});