var through = require('through2');

var writeStream = function (chunk, enc, cb) {
	this.push(chunk.toString().toUpperCase());
	cb();
};

var endStream = function (cb) {
	cb();
};

var transform = through(writeStream, endStream);

process.stdin.pipe(transform).pipe(process.stdout);
