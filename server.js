var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('port', port);
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {

    res.sendFile('/index.html');
});
app.listen(port);
