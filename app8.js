var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){ //req - readble stream, res- writable stream
  console.log('received -'+req.url);
  res.writeHead(200,{'Content-Type':'application/json'});
  var jsonObject = {
    "name": "pepa",
    "age" : 29
  };
  res.end(JSON.stringify(jsonObject));
}
);
server.listen(8080,'127.0.0.1');
console.log('server is listening on port 8080');
