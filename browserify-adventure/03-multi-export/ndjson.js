exports.parse = function (str) {
	return str.split('\n').map(JSON.parse);
};

exports.stringify = function (arr) {
	return arr.map(JSON.stringify).join('\n');
};
