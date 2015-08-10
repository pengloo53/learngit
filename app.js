var server = require('./server.js');
var router = require('./router.js');
var handler = require('./handler.js');

var reqhandler = {};
reqhandler["/"] = handler.index;
reqhandler["/index"] = handler.index;
reqhandler["/show"] = handler.show;
reqhandler["/detail"] = handler.detail;
reqhandler["/add"] = handler.add;

server.startServer(router.router,reqhandler);