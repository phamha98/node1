const express = require('express')
// import { routes } from './routes.js' //importing route
const bodyParser = require('body-parser')
// import 'dotenv/config'
// import { Server } from 'socket.io'
// import http from 'http'
// import { Log } from './Log.js'
// import multer from 'multer'
// import formidable from 'formidable'
// import siofu from 'socketio-file-upload'
// import { RouterApp } from './RouterApp.js'
// import moment from 'moment'
const process = require('process');
const app = express()
const port = 8081
// const route = new RouterApp()
// const app = route.app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(siofu.router)
// routes(route)
// const server = http.createServer(app)

/**
 *
 *
 */
// let memory = {
//   register: {}
// }
// const io = new Server(server)

// // Xử lý các sự kiện của socket
// io.on('connection', socket => {
//   Log.g('on-connection', socket.id)
//   Log.g('register', memory.register)
//   var uploader = new siofu()
//   uploader.dir = 'uploads'
//   uploader.listen(socket)
//   socket.on('register', e => {
//     if (e && typeof e == 'object') {
//       const { user_id } = e
//       memory.register[user_id] = { user_id, time: new Date() }
//       Log.d('memory ', memory)
//       io.emit('register', {
//         data: e,
//         msg: 'dang ky thanh cong',
//         status: true
//       })
//     }
//   })

//   socket.on('upload', event => {
//     Log.e('upload', event)
//     var uploader = new siofu()
//     uploader.dir = 'uploads'
//     uploader.listen(socket)
//   })
//   socket.on('getAll', e => {
//     io.emit('getAll', io.sockets.sockets)
//   })
//   socket.on('disconnect', () => {
//     Log.e('on-disconnect', socket.id)
//     // delete memory.clients[socket.id]
//   })
// })
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads')
//   },
//   filename: function (req, file, cb) {
//     Log.e('file: ', file)
//     cb(null, `img${new Date().getTime()}_` + file.originalname)
//   }
// })

// var upload1 = multer({ storage: storage })

// app.post('/file', upload1.array('file'), function (req, res, next) {
//   const files = req.files;
//   const fileLinks = [];
//   console.log('file', files)
//   // Construct link paths for each uploaded file
//   const prefix = 'http://' + req.hostname + ":" + process.env.SEVER_PORT
//   files.forEach((file) => {
//     const linkPath = prefix + `/uploads/${file.filename}`;
//     fileLinks.push(linkPath);
//   });

//   return res.json({ files: fileLinks, status: true, });
// })

/**
 *
 */

// server.listen(3001, () => {
//   console.log('http:3001')
// })
// app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  // Display a list of links to the files in the "uploads" directory
  // You can dynamically generate this list based on the files present in the "uploads" directory
  res.send(`
    <h1>Uploaded Files</h1>
    <ul>
      <li><a href="/uploads/img.png">File 1</a></li>
      <li><a href="/file2.txt">File 2</a></li>
      <!-- Add more links for other files as needed -->
    </ul>
  `);
});
app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' Không thấy đường dẫn này' })
})
app.listen(port, () => {
  console.log('http:' + port)
})
