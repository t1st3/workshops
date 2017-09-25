var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
	if (process.argv[3]) {
		var readstream = fs.createReadStream(process.argv[3]);
		readstream.on('open', function () {
			readstream.pipe(res);
		});
	}
});

if (process.argv[2]) {
	server.listen(process.argv[2]);
}
