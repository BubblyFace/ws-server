(function() {
  var ws = new WebSocket('ws://127.0.0.1:3000/test');
  let msg = 1;

  ws.onopen = function(event) {
    console.log('WebSocket is open now');
    ws.send(msg++);
  }

  ws.onmessage = function(event) {
    console.log('here get a message form server');
    console.log(event);
  }

  ws.onerror = function(event) {
    console.log(event);
  }

})()