const http = require('http');
const myModule = require('./my-module.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Thae date and time are currently: " + myModule.myDateTime());
  res.end();
}).listen(8080);
console.log(myModule.myText);
