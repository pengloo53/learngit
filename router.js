var url = require('url');
function router (handle,req,res) {
	var pathname = url.parse(req.url).pathname;
	if (typeof handle[pathname] == 'function') {
		return handle[pathname](req,res);
	}else{
		res.writeHead(200,{"Content-Type":"text/html"});
		res.end("404 Not found");
	};
}

exports.router = router;