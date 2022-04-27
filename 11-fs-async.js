const path = require('path');
const {readFile, writeFile} = require('fs'); //synchronous read

const fname1 = path.resolve('./content/first.txt');
const fname2 = path.resolve('./content/second.txt');
//const fname = '.\\content\\first.txt';
//const fname = path.join('.', path.sep, 'content', path.sep, 'first.txt');
console.log(fname1);

//Async read - NON BLOCKING  - (BUT A CALLBACK HELL) - We can use Promise , async
console.log('\nStarting..\n');
readFile(fname1, 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('\nFinished reading First..\n');
    const first = result;
    //Read second file in this callback
    console.log('\nStarting to read Second..\n');
    readFile(fname2, 'utf-8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('\nFinished Reading second..\n');
        const second = result;
        // Write the files in this callback
        console.log('\nStarting to write the merged files.\n');
        writeFile(path.resolve(path.dirname(fname1),'result-Async.txt'), 
        `\n${new Date().toISOString()}\nHere is the merged result:\n${first}\n${second}\nEOF`,
        {flag:'a'}, (err, result)=>{
            if(err) {
                console.log(err);
                return;
            }
            console.log('\nFinished writing the file..\n');
            console.log(result);
        });
        console.log('\nCallback 3 - over..\n');
    });
    console.log('\nCallback 2 - over..\n');
});
console.log('\nCompleted Read and Write tasks..\n');
