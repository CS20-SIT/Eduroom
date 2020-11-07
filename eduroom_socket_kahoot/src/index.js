const server = require("./server");
const port = process.env.PORT || 8000;
const socketIO = require("socket.io");

const app = server.listen(port, () => {
  console.log(`Running on ${port}`);
});

const socketOptions = {
  path: '/kahoot'
}
let user = [];
const io = socketIO.listen(app, socketOptions);
io.on('connection', (client) => {
  console.log('user connected');

  client.on("disconnect", () => {
    console.log("user disconnect");
  });
  
  client.on('sent-message', (msg) => {
    console.log('This is a new messgae ', msg);
    io.sockets.emit('new-message', msg);
  });
});
