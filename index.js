var express = require('express');
var app = express();

//
app.use(express.static('public'));
app.use('/components', express.static('bower_components'))
var port = 8080;
app.listen(port, function () {
  console.log('Example app listening on port' + port + '!');
});	