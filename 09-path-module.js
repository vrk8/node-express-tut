const path = require('path');

console.log(path.sep);

const filePath =  path.join( '/content', 'subfolder', 'test.txt');
console.log(filePath);

console.log('Base name (filename): ',path.basename(filePath));
console.log('Directory name: ', path.dirname(filePath));
console.log('Ext name: ', path.extname(filePath));

const absPath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absPath);