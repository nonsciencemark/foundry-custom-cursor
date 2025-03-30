var fs = require('fs');

// list files in media folder ==============================================================
function read_data() {
    var files = fs.readdirSync('media');
    return files    
}
