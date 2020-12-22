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
	client.on("leaveRoom",(room)=>{
		client.leave(room)
	})
	client.on("sendMessage",(room)=>{
		io.in(room).emit('recieveMessage',room)
	})
	client.on("unsendMessage",(room)=>{
		io.in(room).emit('recieveUnsendMessage',room)
	})
	client.on("changeChatRoomName",(room)=>{
		io.in(room).emit('recieveChangeChatRoomName',room)
	})
	client.on("readMessage",(room)=>{
		io.in(room).emit('recieveReadMessage',room)
	})
	client.on("changeProfilePic",(room)=>{
		io.in(room).emit('recieveChangeProfilePic',room)
	})
	client.on("leaveChatRoom",(room)=>{
		io.in(room).emit('recieveLeaveChatRoom',room)
	})
	client.on("deleteChatRoom",(room)=>{
		io.in(room).emit('recieveDeleteChatRoom',room)
	})
	client.on("kickOut",(room)=>{
		io.in(room).emit('recieveKickOut',room)
	})
});