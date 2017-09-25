var myModule = require('./module.js');

if (process.argv[2] && process.argv[3]) {
  var dir = myModule(process.argv[2], process.argv[3], function (err, data) {
		var i = 0;
		for (i = 0; i < data.length; i++) {
			console.log(data[i]);
		}
	});
}
