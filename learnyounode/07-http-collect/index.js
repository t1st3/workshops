var http = require('http');

var string = '';

if (process.argv[2]) {
	var request = http.get(process.argv[2], function (response) {
		response.on('data', function (data) {
			string += data.toString();
		});
		response.on('end', function () {
			console.log(string.length);
			console.log(string);
		});
	});
}
