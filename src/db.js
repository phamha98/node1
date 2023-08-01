'use strict'
import mysql from 'mysql'
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'new_password',
  database: 'poker',
  port: 3306
})

export default db
