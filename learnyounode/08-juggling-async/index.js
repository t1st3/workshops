var http = require('http');

var strings = new Array();
var i = 2;
var string = '';

function req (cur) {
	if (process.argv[cur]) {
		var request = http.get(process.argv[cur], function (response) {
			response.on('data', function (data) {
				string += data.toString();
			});
			response.on('end', function () {
				strings[cur - 2] = string;
				if (strings[0] && strings[1] && strings[2]) {
					var j = 0;
					for (j = 0; j < 3; j++) {
						console.log(strings[j]);
					}
				}
				string = '';
			});
		});
	}
}

for (i = 2; i < 5; i++) {
	req(i);
}
