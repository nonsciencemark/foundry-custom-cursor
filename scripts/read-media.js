var fs = require('fs');

function read_data() {
    // list files in media folder 
    var files = fs.readdirSync('media');
    // reading in the json
    var cursors = require('../media/sources.json').cursors; //(with path)
    return null
}

var path = require('path');
var scriptName = path.basename(__filename);

console.log('custom-cursor | ' + scriptName + ' loaded');