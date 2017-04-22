var fs = require('fs');
var inputTxt = fs.readFileSync('input.txt','utf8');
fs.writeFileSync('output.txt',inputTxt);
console.log('file written to output.txt');
