var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){ //req - readble stream, res- writable stream
  console.log('received -'+req.url);
  res.writeHead(200,{'Content-Type':'text/html'});
  var readStream = fs.createReadStream(__dirname + '/input.html','utf8');
  readStream.pipe(res);
}
);
server.listen(8080,'127.0.0.1');
console.log('server is listening on port 8080');
