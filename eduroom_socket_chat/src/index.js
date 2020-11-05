const app = require('./server')
const port = process.env.PORT || 5050
const socketIO = require('socket.io');

app.listen(port, () => {
	console.log(`Running on ${port}`)
})

const socketOptions = {
	path: '/socket-chat'
}

const io = socketIO.listen(app, socketOptions);
io.on('connection', (client) => {
console.log('user connected');


});