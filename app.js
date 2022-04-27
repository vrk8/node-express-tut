// To use npm package first install and then use.
const _ = require('lodash'); 
const items = [1, [2, [3, [4, [5]]]]];
const newItems = _.flattenDeep(items);

console.log(items);
console.log(newItems);