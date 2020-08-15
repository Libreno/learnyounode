const http = require('http');
const httpget = (url, callback) => {
	let content = '';
	http.get(url, (resp) => {
		resp.setEncoding('utf8');
		resp.on('data', (data) => {
			content += data;
		});
		resp.on('end', (data) => {
			console.log(content);
			if (callback) {
				callback();
			}
		});
	});
};

httpget(process.argv[2], () => {
	httpget(process.argv[3], () => {
		httpget(process.argv[4], null)
	});
});