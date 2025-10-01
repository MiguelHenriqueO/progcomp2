var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let r = lines[0]
let pi = 3.14159
let volume = (4/3.0) * pi * (r * r * r)

console.log(`VOLUME = ${parseFloat(volume.toFixed(3))}`)