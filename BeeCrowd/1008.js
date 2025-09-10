var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let cod = parseInt(lines[0]);
let horas = parseFloat(lines[1]);
let trabalhada = parseFloat(lines[2]);

let salario = horas * trabalhada

console.log(`NUMBER = ${cod}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)