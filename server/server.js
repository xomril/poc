const dotenv = require('dotenv');
const express = require('express')
const jwt = require('jsonwebtoken');
// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

const app = express()

const indexRouter = require('./routers/index')


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/', indexRouter)


app.listen(process.env.PORT || 3001)