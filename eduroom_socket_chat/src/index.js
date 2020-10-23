const app = require('./server')
const port = process.env.PORT || 5050

app.listen(port, () => {
	console.log(`Running on ${port}`)
})