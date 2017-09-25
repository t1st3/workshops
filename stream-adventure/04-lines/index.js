var split = require('split');
var through = require('through2');

var lineCount = 1;

var writeStream = function (chunk, enc, cb) {
	if (lineCount % 2 === 0) {
		this.push(chunk.toString().toUpperCase() + '\n');
	} else {
		this.push(chunk.toString().toLowerCase() + '\n');
	}
	lineCount += 1;
	cb();
};

var endStream = function (cb) {
	cb();
};

var transform = through(writeStream, endStream);

process.stdin.pipe(split()).pipe(transform).pipe(process.stdout);
