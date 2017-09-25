var i = 0;
var total = 0;
for (i = 2; i < process.argv.length; i++) {
  total += parseInt(process.argv[i]);
}
console.log(total.toString());
