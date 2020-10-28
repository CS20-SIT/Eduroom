const app = require('./server')
const port = process.env.PORT || 5000
require('dotenv').config()
// Test Ja
app.listen(port, () => {
	console.log(`Running on ${port}`)
})