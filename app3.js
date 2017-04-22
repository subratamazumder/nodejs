var http = require('http');
var server = http.createServer(function(req,res){
  console.log('received -'+req.url);
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('hello from node');
}
);
server.listen(8080,'127.0.0.1');
console.log('server is listening on port 8080');
