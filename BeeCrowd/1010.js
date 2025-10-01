var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let collum1= lines[0].split(" ")
let collum2= lines[1].split(" ")


let cod1 = parseInt(collum1[0])
let num1 = parseInt(collum1[1])
let value1 = parseFloat(collum1[2])

let cod2 = parseInt(collum2[0])
let num2 = parseInt(collum2[1])
let value2 = parseFloat(collum2[2])

let total = parseFloat(num1 * value1) + (num2 * value2)

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)


