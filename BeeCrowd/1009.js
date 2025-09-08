// Desafio 1009
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let salario = parseFloat(lines[1])
let vendas = parseFloat(lines[2])
let comissao = (vendas * 15)/100
let final = salario + comissao
console.log(`TOTAL = R$ ${final.toFixed(2)}`)