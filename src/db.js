'use strict'
const mysql = require('mysql')
import { DB_HOST, DB_USER, DB_PASS, DB_NAME } from './config'
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME
})

module.exports = db
