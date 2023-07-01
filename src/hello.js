import express from 'express'
import mysql from 'mysql'
import fetch from 'node-fetch'
const app = express()
const port = 8081

app.get('/', function (req, res) {
  res.send('Hello World NODE JS 8081 == thu 2')
})

app.listen(port, function (error) {
  if (error) {
    console.log('Something went wrong')
  }
  console.log(
    '++++++++\nServer is running port:  ' + port,
    '\n*******************'
  )
})
// app.get('/b_o_bills', function (req, res) {
// const { query, body, params, url, headers } = req
// console.log('req', { query, body, params, url })
//   return res.json({ data: [], status: true, mess: 'oke' })
// })
app.post('/b_o_bills', function (req, res) {
  const { query, body, params, url, headers } = req
  console.log('req', { query, body, params, url })
  // console.log('req', req)
  // console.log('params', params)
  return res.json({ data: [], status: true, mess: 'oke' })
})
// var db = mysql.createConnection({
//   host: '172.16.16.31',
//   user: 'dev_qsland',
//   password: 'ogCdrh2JprqZwYt9',
//   database: 'dev_qsland'
// })

// db.connect(function (err) {
//   console.log('Connected!', err)
// })

// const s = (req, res) => {
//   let sql = 'select * from b_o_bills where  id=3'
//   db.query(sql, (err, response) => {
//     // if (err) throw err
//     // res.json(response)
//     console.log(response)
//   })
// }
// s()

// async function logJSONData () {
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
// }
// logJSONData()
