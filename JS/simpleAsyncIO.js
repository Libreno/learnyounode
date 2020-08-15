const fs = require('fs');
let path = process.argv[2];
fs.readFile(path, 'utf8', (error, data) => {
	if (error) throw error;
	//console.log(data);
	console.log(data.split('\n').length - 1);
});