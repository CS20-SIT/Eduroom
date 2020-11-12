const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const errorHandler = require('./middleware/error');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport')

const ConfigRoute = require('./routes/configRoute')

const passportConfig = require('./config/passport')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: `${__dirname}/config/config.env` })
}

const app = express()

app.use(express.json())
app.use(cookieParser())

const corsMiddleware = cors({
  credentials: true,
  origin: [process.env.ENTRYPOINT_URL, process.env.CLIENT_URL],
  methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE']
})

app.use(corsMiddleware)

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
passportConfig(passport)
app.use(passport.initialize())

app.use('/api', ConfigRoute)
app.use(errorHandler)

app.options('*', cors(corsMiddleware))

module.exports = app
