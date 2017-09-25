var zlib = require('zlib');
var split = require('split');
var combine = require('stream-combiner');
var through = require('through2');
    
module.exports = function () {
	var books;
	var writeStream = function (chunk, enc, cb) {
		if (chunk.length > 0) {
			var ch = JSON.parse(chunk);
			if (ch.type === 'genre') {
				if (books) {
					this.push(JSON.stringify(books) + '\n');
				}
				books = {
					name: ch.name,
					books: []
				};
			}
			if (ch.type === 'book') {
				books.books.push(ch.name);
			}
		}
		cb();
	};

	var endStream = function (cb) {
		if (books) {
			this.push(JSON.stringify(books) + '\n');
		}
		cb();
	};

	var transform = through(writeStream, endStream);

	return combine(split(), transform, zlib.createGzip());
};
