var through = require('through2');
var trumpet = require('trumpet');

var tr = trumpet();

var writeStream = function (chunk, enc, cb) {
	this.push(chunk.toString().toUpperCase());
	cb();
};

var endStream = function (cb) {
	cb();
};

var louds = tr.select('.loud').createStream();
louds.pipe(through(writeStream, endStream)).pipe(louds);

process.stdin.pipe(tr).pipe(process.stdout);
