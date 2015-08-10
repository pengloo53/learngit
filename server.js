var http = require('http');

function startServer(route,handle){
    http.createServer(function(req,res){
        route(handle,req,res);
    }).listen(8888);
    console.log("Your server is start@port 8888");
}
exports.startServer = startServer;
