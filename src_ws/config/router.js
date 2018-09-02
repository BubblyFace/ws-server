const Router = require('koa-router')
const WebSocket = require('ws');

const socketId = new (require('../utils/get_socket_id.js'))();

let router = new Router()

router.get('/', (ctx, next) => {

  ctx.body = 'Hello World!';
  console.log(next);
  var ws = getWebSocket(ctx);

})


function getWebSocket(ctx) {
  console.assert(ctx, 'CTX CAN NOT BE EMPTY');
  let id = ctx.id ? SocketId.getIdByCtx() : SocketId.getId();


  let ws = new WebSocket.Server({
    noServer: true
  })

  ws.on('connection', function (ws) {
    ws.on('message', function (data, next) {
      console.log(data);
      console.log(next);
    })

    ws.send({
      msg: 'success connected ws',
      id: id
    })

    ws.handleUpgrade
  })

  return {
    ws: ws,
    id: id
  }
}



module.exports = router