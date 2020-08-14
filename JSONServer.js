const http = require('http');
let host = '127.0.0.1';

const server = http.createServer((req, resp) => {
    let content = '';
    let url = new URL(req.url, `http://${host}`);
    let iso = new Date(url.searchParams.get('iso'));
    console.log(url.pathname);
    switch (url.pathname){
        case '/api/parsetime':
            content = toJSONTime(iso);
            break;
        case '/api/unixtime':
            content = toUnixTime(iso);
            break;
        default:
            resp.writeHead(404, {
                'Content-Type': 'text/plain; charset=UTF-8'
            });
            resp.end("error: wrong address");
            return;
    };
    resp.writeHead(200, {
        'Content-Type': 'text/plain; charset=UTF-8'
    });
    resp.end(content);
});

const toJSONTime = (d) => {
    return JSON.stringify({
        "hour": d.getHours(),
        "minute": d.getMinutes(),
        "second": d.getSeconds()
    });
};

const toUnixTime = (date) => {
    return JSON.stringify({unixtime: date.getTime()});
}

let port = process.argv[2];
server.listen(port, host, () => {
    console.log(`Сервер запущен hostname: ${host}, port:${port}`)
});
