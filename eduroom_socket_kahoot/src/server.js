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

let originURL = 'http://localhost:3000';
if (process.env.NODE_ENV === 'production') {
  originURL = process.env.CLIENT_URL;
}

app.use(
  cors({
    credentials: true,
    origin: originURL,
  })
);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.get('/kahoot/test',(req,res)=>{return res.status(200).json({success:true})})
module.exports = app