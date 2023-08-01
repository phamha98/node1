// // 'use strict'

// // import util from 'util'
// // import mysql from 'mysql'
// import db from './db.js'

// export default {
//   get: (req, res) => {
//     console.log('req', req.query)
//     console.log('req', req.url)
//     let sql = 'SELECT * FROM user'
//     db.query(sql, (err, response) => {
//       if (err) {
//         console.log('err', err)
//         throw err
//       }
//       res.json(response)
//     })
//   },
//   detail: (req, res) => {
//     let sql = 'SELECT * FROM users WHERE id = ?'
//     db.query(sql, [req.params.productId], (err, response) => {
//       if (err) throw err
//       res.json(response[0])
//     })
//   },
//   update: (req, res) => {
//     let data = req.body
//     let productId = req.params.productId
//     // let sql = 'UPDATE users SET ? WHERE id = ?'
//     // db.query(sql, [data, productId], (err, response) => {
//     //   if (err) throw err
//     //   res.json({ message: 'Update success!' })
//     // })
//   },
//   store: (req, res) => {
//     let data = req.body
//     console.log('data', data)
//     res.json({ message: 'Update success!', data })
//     // let sql = 'INSERT INTO users SET ?'
//     // db.query(sql, [data], (err, response) => {
//     //   if (err) throw err
//     //   res.json({ message: 'Insert success!' })
//     // })
//   },
//   delete: (req, res) => {
//     let sql = 'DELETE FROM users WHERE id = ?'
//     // db.query(sql, [req.params.productId], (err, response) => {
//     //   if (err) throw err
//     //   res.json({ message: 'Delete success!' })
//     // })
//   }
// }
