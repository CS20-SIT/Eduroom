const server = require('./server');
const port = process.env.PORT || 8000;
const socketIO = require('socket.io');

<<<<<<< Updated upstream
const app = server.listen(port, () => {
  console.log(`Running on ${port}`);
});

const io = socketIO.listen(app);
io.on('connection', (client) => {
  console.log('user connected');

  client.on('disconnect', () => {
    console.log('user disconnect');
  });

  client.on('sent-message', (msg) => {
    console.log('This is a new messgae ', msg);
    io.sockets.emit('new-message', msg);
  });
});
=======
app.listen(port, () => {
	console.log(`Running on ${port}`)
})
///////////////////////////////////////////////////////////
// const app = require('express')()
// const http = require('http').createServer(app)
const io = require('socket.io')(app)

io.on('connection', socket => {
  socket.on('seconds',temp => {
    console.log('temp'+temp)
    var interval = setInterval(()=> {
      console.log('temp1 '+temp);
      temp--;
      io.emit('seconds',temp);
      if(temp <= 0){
        clearInterval(interval);
        
      }
    }, 1000);
    console.log('hello outside');
    // io.emit('seconds')
  })
})

// http.listen(8000, function() {
//   console.log('listening on port 8000')
// })
>>>>>>> Stashed changes
