var domify = require('domify');

var html = '<div>Hello <span class="name"></span>!</div>';

var Widget = function () {
	if (!(this instanceof Widget)) return new Widget;
	this.el = domify(html);
};

Widget.prototype.setName = function (str) {
	this.el.querySelector('.name').textContent = str;
};

Widget.prototype.appendTo = function (target) {
	target.appendChild(this.el);
};

module.exports = Widget;
