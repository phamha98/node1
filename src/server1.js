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
    <style>
        body {
            margin: 0;
            padding: 0;
            background-image: url("https://mega.com.vn/media/news/1876_hinh_nen_doraemon_4k__50_.jpg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            width: 100%;
            height: 100vh; /* 100% of the viewport height */
        }
        /* Add any other custom styles for your HTML elements here */
    </style>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>
  `);
});
app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' Không thấy đường dẫn này' })
})
app.listen(port, () => {
  console.log('http:' + port)
})
//https://mega.com.vn/media/news/1876_hinh_nen_doraemon_4k__50_.jpg
//https://nhadepso.com/wp-content/uploads/2023/03/chon-loc-55-hinh-nen-quy-ngau-lanh-lung-dang-so-doc-la_14.jpg