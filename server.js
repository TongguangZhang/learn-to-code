var http = require('http');
var dt = require('./date');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('The Date and Time is:' + dt.dateTime());
  res.end();
}).listen(8080);