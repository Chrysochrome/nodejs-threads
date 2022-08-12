const { parentPort, isMainThread } = require('node:worker_threads');
// const process = require('node:process');

let i = 0

while (true) {
    if(i === 500000000) {
        i = 0
        console.log(`------------${500000000}------------`)
        if(!isMainThread) parentPort.postMessage(`------------${500000000}------------`)
    }
    i += 1
}
