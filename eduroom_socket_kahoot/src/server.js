const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: `${__dirname}/config/config.env` });
}

const app = express();

app.use(express.json());
app.use(cookieParser());

const corsMiddleware = cors({
  credentials: true,
  origin: [process.env.ENTRYPOINT_URL, process.env.CLIENT_URL],
  methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE']
})

app.use(corsMiddleware)
app.options('*', cors(corsMiddleware))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.get('/kahoot/test', (req, res) => {
  return res.status(200).json({ success: true });
});
module.exports = app;
