var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
	var query = url.parse(req.url).query.replace('iso=', '');
	var date = new Date(query);
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	if (url.parse(req.url).pathname === '/api/parsetime') {
		var obj = {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		};
		res.end(JSON.stringify(obj));
	}
	if (url.parse(req.url).pathname === '/api/unixtime') {
		res.end('{ "unixtime": ' + date.getTime() + ' }');
	}
});

if (process.argv[2]) {
	server.listen(process.argv[2]);
}
