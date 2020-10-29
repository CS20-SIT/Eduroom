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



module.exports = app
