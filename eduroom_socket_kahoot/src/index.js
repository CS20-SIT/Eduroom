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

  client.on("sent-message", (msg, pin) => {
    console.log("This is a new messgae ", msg, pin);
    io.sockets.emit("new-message", msg, pin);
  });

  client.on("sent-question", (question, pin) => {
    console.log("This is a new messgae ", question, pin);
    io.sockets.emit("new-message", question, pin);
  });
  client.on("set-openRoom", (isOpen, pin) => {
    console.log("this room is ", pin, isOpen);
    io.sockets.emit("new-room", isOpen, pin);
  });

  client.on("set-skip", (isSkip, pin,questionNo) => {
    console.log("this skip is ", pin, isSkip,questionNo);
    io.sockets.emit("new-question", isSkip, pin,questionNo);
  });

  client.on("set-nextQuestion", (isNext, pin,questionNo) => {
    console.log("this next is ", pin, isNext,questionNo);
    io.sockets.emit("new-Nextquestion", isNext, pin,questionNo);
  });
});
