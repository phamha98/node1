'use strict'
import mysql from 'mysql'
const db = mysql.createConnection({
  host: '172.16.16.31',
  user: 'dev_qsland',
  password: 'ogCdrh2JprqZwYt9',
  database: 'dev_qsland'
})

export default db
