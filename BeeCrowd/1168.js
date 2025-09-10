//1168
var fs = require('fs');
var raw = fs.readFileSync('/dev/stdin', 'utf8') || '';
var lines = raw.split(/\r?\n/);

var n = parseInt(lines.shift(), 10) || 0;
var ledsMap = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];

for (var i = 0; i < n; i++) {
    if (!lines.length) break;
    var line = lines.shift().trim();
    if (line === '') {
        i--; continue; 
    }

    var total = 0;
    for (var j = 0; j < line.length; j++) {
        var ch = line[j];
        var d = ch.charCodeAt(0) - 48;
        if (d >= 0 && d <= 9) total += ledsMap[d];
    }

    console.log(total + ' leds');
}
