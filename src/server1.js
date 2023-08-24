import express from 'express'
const bodyParser = require('body-parser')
const app = express()
const port = 8081
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>11111</title>
     
</head>
<body>
    <!-- Your content goes here -->
    <div>xin chao</div>
    <div>xin chao</div>
    <div>xin chao</div>
</body>
</html>
  `);
});
app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' Kh ô ng t hấ y đườn g dẫn này' })
})
app.listen(port, () => {
  console.log('http:' + port)
})
//https://mega.com.vn/media/news/1876_hinh_nen_doraemon_4k__50_.jpg
//https://nhadepso.com/wp-content/uploads/2023/03/chon-loc-55-hinh-nen-quy-ngau-lanh-lung-dang-so-doc-la_14.jpg