const server = require("./server");
const port = process.env.PORT || 8000;
const socketIO = require("socket.io");
const { countReset } = require("console");
const { EDEADLK } = require("constants");

const app = server.listen(port, () => {
  console.log(`Running on ${port}`);
});

const socketOptions = {
  path: "/kahoot",
};
let user = [];
const io = socketIO.listen(app, socketOptions);
io.on("connection", (client) => {
  client.on("disconnect", () => {
  });

  client.on("sent-message", (msg, pin) => {
    // console.log("This is a new messgae ", msg, pin);
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

  client.on("set-skip", (isSkip, pin) => {
    console.log("this skip is ", pin, isSkip);
    io.sockets.in(pin).emit("get-skip", isSkip);
  });

  client.on("set-nextQuestion", (isNext, pin, questionNo) => {
    console.log("this next is ", pin, isNext, questionNo);
    io.sockets.in(pin).emit("get-Nextquestion", isNext, pin, questionNo);
  });
  


  client.on("start-game", (room, time) => {
    let endTime = new Date().getTime();
    console.log("sent time success:", room, time);
    endTime += time * 1000;
    io.emit("sent-end-time", room, endTime);
  });

  client.on("set-name", (namePlayer, pin) => {
    console.log("this name is ", pin, namePlayer);
    io.sockets.emit("new-name", namePlayer, pin);
  });

  client.on("set-diff", (diff, pin) => {
    // console.log("this diff is ", diff, pin);
    io.sockets.in(pin).emit("get-diff", diff,pin);
  });

  //////////////
  client.on('room', function(room) {
    // console.log('room',room)
    client.join(room);
});

  ///////////////
  
  client.on("set-countAnswer", (pin, questionNo,playerAnswer) => {
    // console.log("answer", pin, questionNo,playerAnswer);
    io.sockets.in(pin).emit("get-countAnswer",pin, questionNo,playerAnswer);
  });
});
