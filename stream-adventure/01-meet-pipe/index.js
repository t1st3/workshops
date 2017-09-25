var fs = require('fs');

if (process.argv[2]) {
	fs.createReadStream(process.argv[2]).pipe(process.stdout);
}
