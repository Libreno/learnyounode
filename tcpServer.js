'use strict'
const net = require('net');
const fN = (s) => {
    let str = s.toString();
    if (str.length === 1){
        return '0'+ s;
    };
    return s;
};
const server = net.createServer((socket) => {
    let d = new Date();
    let str = `${d.getFullYear()}-${fN(d.getMonth() + 1)}-${fN(d.getDate())} ${fN(d.getHours())}:${fN(d.getMinutes())}\n`;
    console.log(str);
    socket.write(str);
    socket.end();
});
server.listen(process.argv[2]);