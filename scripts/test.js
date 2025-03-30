// test start line =========================================================================
var msg = 'Hello World';
// console.log(msg);

// list files in media folder ==============================================================
var fs = require('fs');
var files = fs.readdirSync('media');
// console.log(files);

// print path ==============================================================================
// console.log('media/' + files);

// select an option
var selected_id = 'skyrimcursor';
// console.log(selected_id);

// reading in the json =====================================================================
var cursors = require('../media/sources.json').cursors; //(with path)

// cursors.forEach(i => {
//     console.log(i.id)
// });

console.log('Selected: ' + cursors.find(i => i.id == selected_id).title)