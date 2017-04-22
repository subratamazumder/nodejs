var fs = require('fs');
var readStream = fs.createReadStream(__dirname + '/input.txt','utf8');
var writeStream =  fs.createWriteStream(__dirname + '/output.txt');

//approach one
// readStream.on('data',function(chunk){
//   console.log('new chunk of data received');
//   writeStream.write(chunk);
// });

//approach two
readStream.pipe(writeStream);
