var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
// var readLine = require('util/readLine');

// var note = fs.createReadStream("data/note.txt","utf8");

function index (req,res) {
	var note = fs.readFileSync("data/note.txt","utf8");
	if(note == ""){
		res.writeHead(200,{"Content-Type":"text/html"});
		res.write("<h2>现在没有预约</h2><hr/>");
		res.write("<meta charset=\"utf-8\"/>");
		res.write("<a href=\"/add\">现在预约</a>");
		res.end();
	}else{
		res.writeHead(200,{"Content-Type":"text/html"});
		res.write("<meta charset=\"utf-8\"/>");
		res.write("<h2>已存在的预约</h2>");
		res.write(note);
		res.write("<hr/><a href=\"/add\">现在预约</a>");
		res.end();
	}
}

function detail (req,res) {
	var note = fs.readFileSync("data/note.txt","utf8");
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write("<meta charset=\"utf-8\"/>");
	res.write("<h2>已存在的预约</h2>");
	res.write(note);
	res.write("<hr/><a href=\"/add\">现在预约</a>");
	res.end();
}

function show(req,res){
	var name = querystring.parse(url.parse(req.url).query).name;
	var dep = querystring.parse(url.parse(req.url).query).dep;
	var date = querystring.parse(url.parse(req.url).query).date;
	var time = querystring.parse(url.parse(req.url).query).time;
	var intro = querystring.parse(url.parse(req.url).query).intro;
	var detail = date + "  " + time + "--" + name + ", " + dep + ", " + intro + "<br/>";
	fs.appendFileSync("data/note.txt", detail)
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write("<meta charset=\"utf-8\"/>");
	res.write("<h2>您的预约已经受理</h2><hr/>");
	res.write("<a href=\"/detail\">查看列表</a>");
	res.end();
}

function add(req,res){
	var pageContent = fs.readFileSync("page/add.html","utf8");
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"tcal.css\" />")
	res.write("<script type=\"text/javascript\" src=\"tcal.js\"></script>");
	res.end(pageContent);
}

exports.index = index;
exports.detail = detail;
exports.show = show;
exports.add = add;