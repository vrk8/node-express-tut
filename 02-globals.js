//GLOBALS - No WINDOW

// __dirname: path to cwd
// __filename: filename
// require: Function to use modules (CommonJS)
// module: infor about current module (file)
// process: info about env where the program is being executed
//
// and more...
const exp = require('express');
console.log(__dirname);
console.log(__filename);
console.log(module);
console.log(process.env.COMPUTERNAME);
setInterval(()=>{
    let i = 0;
    console.log(`Hello World - ${{i}}`);
    i++;
},1000);