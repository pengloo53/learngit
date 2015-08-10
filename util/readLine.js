function readLines(input) {
  var remaining = '';
  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      container.push(line);
      index = remaining.indexOf('\n');
    }
 
  });
 
  input.on('end', function() {
    if (remaining.length > 0) {
      container.push(remaining);
    }
  });
}
 
exports.readLines = readLines;

