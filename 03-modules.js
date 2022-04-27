//Modules
const names = require('./04-names');
const func = require('./05-utils');

const data = require('./06-alternative-flavor');

require('./07-mind-grenade'); // Notice that the function call in the required module gets executed automatically !

console.log(names);
console.log('Data: ', data);

func(names.venky);
func(names.maheswari);
func('John');
