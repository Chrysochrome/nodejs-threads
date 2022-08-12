const child_process = require('node:child_process');
const path = require('path');
const fs = require('fs');

setInterval(() => {
    console.log(+new Date());
}, 500)

let process = child_process.fork(path.resolve('./load.js'))
process.on('message', (msg) => {
    console.log(msg);
})
