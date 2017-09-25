var qs = require('querystring');
var url = require('url');

var pr = prompt();

console.log(url.resolve(pr, qs.parse(url.parse(pr).query).file));
