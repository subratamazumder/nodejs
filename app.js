var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){ //req - readble stream, res- writable stream
  console.log('received -'+req.url);
  if(req.url=="/" || req.url=="/home"){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/home.html','utf8').pipe(res);
  }
  if(req.url=="/api"){
    res.writeHead(200,{'Content-Type':'application/json'});
    var jsonObj = {
      "name": "pepa",
      "wish" : "to roam in car"
    }
    res.end(JSON.stringify(jsonObj));
  }
  else {
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/404.html','utf8').pipe(res);
  }

}
);
server.listen(8080,'127.0.0.1');
console.log('routing server is listening on port 8080');
