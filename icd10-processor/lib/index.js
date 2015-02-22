var fs = require('fs');
var icdCodesFile = process.argv.pop();
var processor = require('./processor');

console.log('Read', processor);

if(fs.existsSync(icdCodesFile)){
    processor.process(icdCodesFile);
}
