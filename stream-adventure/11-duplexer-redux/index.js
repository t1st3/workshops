var duplexer = require('duplexer2');
var through = require('through2');

module.exports = function (counter) {
	var count = {};

	var writeStream = function (chunk, enc, cb) {
		count[chunk.country] = (count[chunk.country]) ? count[chunk.country] + 1 : 1;
		cb();
	};

	var endStream = function (cb) {
		counter.setCounts(count);
		cb();
	};

	var transform = through.obj(writeStream, endStream);

	return duplexer({objectMode: true}, transform, counter);
};
