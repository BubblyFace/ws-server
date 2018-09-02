class SocketId {
  constructor() {

  }

  getIdByCtx(ctx) {    
    let id = ctx.id; 
    return id;
  }

  getId() {
    let date = new Date().valueOf();
    return date;
  }

}

module.exports = SocketId;

