const http = require('http');
const _ = require('lodash');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("A random number between 1 and 100 is " + _.random(1,100));
  res.end();
}).listen(8080);
console.log(_.random(1,100));
