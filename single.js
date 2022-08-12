const fs = require('fs');
const path = require('path');


setInterval(() => {
    console.log(+new Date());
}, 500);

eval(fs.readFileSync(path.resolve('./load.js')).toString())
