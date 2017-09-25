var concat = require('concat-stream');

process.stdin.pipe(concat(function (data) {
	console.log(data.toString().split('').reverse().join(''));
}));
