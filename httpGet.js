const http = require('http');
http.get(process.argv[2], (resp) => {
	resp.setEncoding('utf8');
	resp.on('data', (data) => {
		console.log(data);
	});
/*	resp.on('error', (data) => {
		console.log('error');
		console.log(data);
	});
	resp.on('end', (data) => {
		console.log('end');
	});*/
}).on('error', console.error);