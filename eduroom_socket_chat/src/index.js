const server = require('./server')
const port = process.env.PORT || 5050
const socketIO = require('socket.io');

const app = server.listen(port, () => {
	console.log(`Running on ${port}`)
})

const socketOptions = {
	path: '/socket-chat'
}

const io = socketIO.listen(app, socketOptions);
io.on('connection', (client) => {
console.log('user connected');
	client.on("joinRoom",(room)=>{
		//read message
		client.join(room)
	})
	client.on("sendMessage",(room)=>{
		io.in(room).emit('recieveMessage')
	})
});