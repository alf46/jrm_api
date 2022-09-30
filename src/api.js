// imports
const express = require("express");
const morgan = require('morgan')

// settions
const app = express();
app.set('port', process.env.port || 3000)

// middlewares
app.use(morgan('dev'))
app.use(express.json())

// routes
app.get('/', (req, res) => {
  res.json({
    env: process.env.NODE_ENV
  })
})

app.use('/.netlify/functions/api', require('./routes'))

const serverless = require("serverless-http");
module.exports = app
module.exports.handler = serverless(app)

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})