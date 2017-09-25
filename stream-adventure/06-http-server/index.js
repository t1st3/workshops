var http = require('http');
var through = require('through2');

var writeStream = function (chunk, enc, cb) {
	this.push(chunk.toString().toUpperCase());
	cb();
};

var endStream = function (cb) {
	cb();
};

var server = http.createServer(function (req, res) {
	if (req.method == 'POST') {
		req.pipe(through(writeStream, endStream)).pipe(res);
	}
});

if (process.argv[2]) {
	server.listen(process.argv[2]);
}
