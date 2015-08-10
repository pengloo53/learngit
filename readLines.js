var fs = require('fs');
function readLines(input, func) {
  var remaining = '';
  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      func(line);
      index = remaining.indexOf('\n');
    }
 
  });
 
  input.on('end', function() {
    if (remaining.length > 0) {
      func(remaining);
    }
  });
}
 
function func(data) {
  container.push(data);
}
 
var input = fs.createReadStream('data/note.txt');
readLines(input, func);