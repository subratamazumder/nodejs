var fs = require('fs');
//async reading
fs.mkdirSync('test')
fs.unlink('output.txt')
fs.readFile('input.txt','utf8',function(err,data){
  console.log('file reading complete writting now');
  //async writing
  fs.writeFile('output.txt',data)
});
// fs.writeFileSync('output.txt',inputTxt);
// console.log('file written to output.txt');
console.log('i am still reading file');
console.log('removing files');
fs.rmdirSync('test')
