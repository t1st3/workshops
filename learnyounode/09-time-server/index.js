var net = require('net');

var dateString = '';

var server = net.createServer(function (socket) {
	var date = new Date();
	var year = date.getFullYear().toString();
	var month = (date.getMonth() < 10) ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
	var day = (date.getDate() < 10) ? '0' + date.getDate().toString() : date.getDate().toString();
	var hour = (date.getHours() < 10) ? '0' + date.getHours().toString() : date.getHours().toString();
	var minute = (date.getMinutes() < 10) ? '0' + date.getMinutes().toString() : date.getMinutes().toString();
	var str = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
	dateString += str;
	socket.end(dateString + '\n');
});

if (process.argv[2]) {
	server.listen(process.argv[2]);
}
