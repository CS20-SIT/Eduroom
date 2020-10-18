const app = require('./server')
const port = process.env.PORT || 8000

app.listen(port, () => {
	console.log(`Running on ${port}`)
})