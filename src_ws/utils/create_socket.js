const WebSocket = require('ws');

function createSocket(request, socket, head) {

  let webSocket = new WebSocket.Server({
    noServer: true
  });

  let msg = 1


  webSocket.on('connection', function (ws, request) {

    
    console.assert(request, 'i can not get request')
    ws.on('message', function (data, next) {
      console.log(data);
      console.log(next);
    })

    ws.send(msg ++)
  })

  webSocket.handleUpgrade(request, socket, head, (ws) => {
    webSocket.emit('connection', ws, request)
  })

  return webSocket
}



module.exports = createSocket