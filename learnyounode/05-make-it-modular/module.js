var fs = require('fs');
var path = require('path');

module.exports = function (dir, filter, cb) {
	if (dir && filter) {
		var folder = fs.readdir(dir, function (err, data) {
			var array = new Array();
			if (err) {
				cb(err, null);
				return;
			}
			var i = 0;
			for (i = 0; i < data.length; i++) {
				if (path.extname(data[i]) === '.' + filter) {
					array.push(data[i]);
				}
			}
			cb(null, array);
			return;
		});
	}
};
