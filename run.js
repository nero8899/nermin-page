
var server = require('./server');
var database = require('./database');

function init(){

    database.connect(function(){
        

        server.start();

    });

}

init();