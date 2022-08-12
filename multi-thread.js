const { Worker } = require('node:worker_threads');
const path = require('path');

setInterval(() => {
    console.log(+new Date());
}, 500)

let worker = new Worker(path.resolve('./load.js'));
worker.on("message", (msg) => {
    console.log(msg);
})
