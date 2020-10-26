const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const errorHandler = require('./middleware/error')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const ConfigRoute = require('./routes/configRoute')
const passport = require('passport')
const passportConfig = require('./config/passport')

const { test, getAnn, postAnn } = require('./controllers/graderCreate/test')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: `${__dirname}/config/config.env` })
}

const app = express()

app.use(express.json())

app.use(cookieParser())

let originURL = 'http://localhost:3000'
if (process.env.NODE_ENV === 'production') {
  originURL = process.env.CLIENT_URL
}

app.use(
  cors({
    credentials: true,
    origin: originURL,
  })
)

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
passportConfig(passport)
app.use(passport.initialize())

app.use('/api', ConfigRoute)
app.use(errorHandler)

app.get('/api/08', test)
app.get('/api/08/ann', getAnn)
app.post('/api/08/cann', postAnn)

module.exports = app
