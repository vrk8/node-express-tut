const path = require('path');
const {readFileSync, writeFileSync} = require('fs'); //synchronous read

const fname1 = path.resolve('./content/first.txt');
//const fname = '.\\content\\first.txt';
//const fname = path.join('.', path.sep, 'content', path.sep, 'first.txt');

console.log(fname1,'\n');

console.log('start\n');
// SYNC File operations - BLOCKING MODE.
const first = readFileSync(fname1,'utf-8');
const second = readFileSync('.\\content\\second.txt', 'utf-8');
console.log(first, '\n');
console.log(second);

//If file not there it will create. If file is there, it will overwrite.
//flag:'a' will make it Append.
writeFileSync(path.resolve(path.dirname(fname1),'result-sync.txt'), 
    `\n${new Date().toISOString()}\nHere is the merged result:\n${first}\n${second}\nEOF`,
    {flag:'a'});

console.log('\nDone with the read-write task\n');
console.log('\nStarting the next one\n');

