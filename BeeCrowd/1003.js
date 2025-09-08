// Desafio 1003
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines[0])
let B = parseFloat(lines[1])

let SOMA = A + B
console.log(`SOMA = ${SOMA}`)