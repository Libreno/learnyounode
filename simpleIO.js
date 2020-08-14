const fs = require('fs');
let path = process.argv[2];
console.log(fs.readFileSync(path, 'utf8').split('\n').length);