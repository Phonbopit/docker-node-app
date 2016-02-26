var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.json({message: 'Hello World'});
});

app.get('/hello', function(req, res) {
  res.json({
    message: 'Hello'
  });
});

app.listen(7777, function() {
  console.log('Application is running on port 7777');
});
