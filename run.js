
var express = require('express');

var server = express();

server.get('/', function(req, res){

    res.send('Hello world!');

});

server.listen(3000, function(){

    console.log('Server running');
});
