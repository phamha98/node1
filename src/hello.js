const express = require('express')
const app = express()
const port = 8081

app.get('/', function (req, res) {
  res.send('Hello World NODE JS 8081 == thu 2')
})

app.listen(port, function (error) {
  if (error) {
    console.log('Something went wrong')
  }
  console.log('server is running port:  ' + port)
})
