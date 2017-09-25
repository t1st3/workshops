var crypto = require('crypto');
var zlib = require('zlib');
var through = require('through2');
var tar = require('tar');

if (process.argv[2] && process.argv[3]) {
	var cryptoStream = crypto.createDecipher(process.argv[2], process.argv[3]);
	var parser = new tar.Parse({
		filter: function (path, entry) {
			if (entry.type === 'File') {
				return true;
			}
			return false;
		}
	});
	parser.on('entry', function (entry) {
		entry.pipe(crypto.createHash('md5', { encoding: 'hex' })).pipe(through(function (data) {
			console.log(data + ' ' + entry.path);
		}));
	});

	process.stdin.pipe(cryptoStream).pipe(zlib.createGunzip()).pipe(parser);
}
