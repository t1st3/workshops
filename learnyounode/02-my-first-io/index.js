var fs = require('fs');

if (process.argv[2]) {
  var array = fs.readFileSync(process.argv[2], 'utf-8').split('\n');
  console.log(array.length - 1);
}
