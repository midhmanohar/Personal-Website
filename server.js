var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/custom.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'custom.css'));
});

app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/image1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'image1.jpg'));
});

app.listen(8080,"127.0.0.1");
// var port = 3000;
// app.listen(port, function () {
//   console.log(`Web app listening on port ${port}!`);
// });
