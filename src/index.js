// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const helmet = require('helmet')
// const morgan = require('morgan')

// // defining the Express app
// const app = express()
// // defining an array to work as the database (temporary solution)
// const ads = [{ title: 'Hello, world (again)!' }]

// // adding Helmet to enhance your Rest API's security
// app.use(helmet())

// // using bodyParser to parse JSON bodies into JS objects
// app.use(bodyParser.json())

// // enabling CORS for all requests
// app.use(cors())

// // adding morgan to log HTTP requests
// app.use(morgan('combined'))

// // defining an endpoint to return all ads
// app.get('/', (req, res) => {
//   res.send(ads)
// })
// app.get('/hi', (req, res) => {
//   res.send({ xinchao: '123' })
// })
// // starting the server
// app.listen(3000, () => {
//   console.log('listening on port 3000')
// })
// const moment = require('moment')
// var mysql = require('mysql')

// var con = mysql.createConnection({
//   host: 'localhost',
//   user: '',
//   password: '',
//   database: 'test'
// })
// con.connect(function (err) {
//   if (err) throw err
//   console.log('Connected!')
// })
// // con.query(`SELECT  * FROM   User `, function (err, result, fields) {
// //   if (err) throw err
// //   console.log(result)
// // })
// // con.connect(function (err) {
// //   if (err) throw err
// //   console.log('Connected!')
// //   var sql =
// //     'INSERT INTO user (first_name, last_name,full_name,gender ) VALUES ?'
// //   const date_srt = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')

// //   console.log(date_srt)
// //   var values = [['John', 'Highway 71', date_srt, 2]]
// //   con.query(sql, [values], function (err, result) {
// //     if (err) return console.log(err)
// //     console.log('Number of records inserted: ' + result.affectedRows)
// //   })
// // })
// ///

// // var express = require('express')
// // var app = express()
// // var fs = require('fs')

// app.get('/list_user', function (req, res) {
//   console.log('list_user')
//   console.log(req)
//   con.connect(function (err) {
//     con.query(`SELECT  * FROM   User `, function (err, result, fields) {
//       if (err) throw err
//       console.log(result)
//       res.end(JSON.stringify(result))
//     })
//   })
// })

// // var server = app.listen(3000, function () {
// //   var host = server.address().address
// //   var port = server.address().port
// //   console.log('Example app listening at http://%s:%s', host, port)
// // })

// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser')
// // require('dotenv').load()
// const port = 3031

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// // let routes = require('./routes') //importing route
// // routes(app)

// // app.use(function (req, res) {
// //   res.status(404).send({ url: req.originalUrl + ' not found' })
// // })

// app.listen(port)

// console.log('RESTful API server started on: ' + port)
const express = require('express')
const app = express()
const port = 8081

app.get('/', function (req, res) {
  res.send('Hello World NODE JS 3031')
})

app.listen(port, function (error) {
  if (error) {
    console.log('Something went wrong')
  }
  console.log('server is running port:  ' + port)
})
