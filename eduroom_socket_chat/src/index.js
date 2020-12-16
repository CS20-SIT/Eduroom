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
	client.on("joinRoom",(data)=>{
		// join client to the room 
		const {room} = data
		client.join(room)
	})
	client.on("sentMessage",(data)=>{
		/* 
		when client sent message it will emit notifyMessage to all client (for notify)
		and also sent message to specific room (for user who are in the room)
		*/
		const {sender,message,room} = data
		io.emit("notifyMessage",{sender,message,room})
		io.to(room).emit('message',{sender,message,room})
	})

});