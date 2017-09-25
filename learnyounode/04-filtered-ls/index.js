var fs = require('fs');
var path = require('path');

if (process.argv[2] && process.argv[3]) {
  var dir = fs.readdir(process.argv[2], function (err, data) {
    if (!err) {
      var i = 0;
      for (i = 0; i < data.length; i++) {
        if (path.extname(data[i]) === '.' + process.argv[3]) {
          console.log(data[i]);
        }
      }
    }
  });
}
