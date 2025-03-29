// packages
var fs = require('fs');

// test start line
var msg = 'Hello World';
console.log(msg);

// list files in media folder
var files = fs.readdirSync('media');
console.log(files);

// print path
console.log('media/' + files)

// reading
// var json = require('./media/sources.json'); //(with path)
// console.log(json)