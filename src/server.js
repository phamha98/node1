import express from 'express'
const app = express()
import bodyParser from 'body-parser'
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

import { routes } from './routes.js' //importing route
routes(app)

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
})

app.listen(port)

console.log('RESTful API server started on: ' + port)
