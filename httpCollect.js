const http = require('http');
let content = '';
http.get(process.argv[2], (resp) => {
	resp.setEncoding('utf8');
	resp.on('data', (data) => {
		content += data;
	});
/*	resp.on('error', (data) => {
		console.log('error');
		console.log(data);
	});*/
	resp.on('end', (data) => {
		console.log(content.length);
		console.log(content);
	});
}).on('error', console.error);
