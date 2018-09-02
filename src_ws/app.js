const Koa = require('koa');
      http = require('http');
      https = require('https');
      Ws = require('ws');
      url = require('url')

let ws_arr = []

let app = new Koa();
let create_socket = require('./utils/create_socket.js')


let server = http.createServer(app.callback());


server.on('upgrade', (request, socket, head) => {
  const pathname = url.parse(request.url).pathname;

  if(pathname === '/test') {
    let ws_obj = create_socket(request, socket, head);
    ws_arr.push(ws_obj)
  }

})



server.listen(3000)