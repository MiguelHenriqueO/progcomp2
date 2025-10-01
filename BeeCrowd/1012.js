

//Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
//a) a área do triângulo retângulo que tem A por base e C por altura.
//b) a área do círculo de raio C. (pi = 3.14159)
//c) a área do trapézio que tem A e B por bases e C por altura.
//d) a área do quadrado que tem lado B.
//e) a área do retângulo que tem lados A e B.
//Entrada

//O arquivo de entrada contém três valores com um dígito após o ponto decimal.
//Saída

//O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let a = parseFloat(lines[0])
let b = parseFloat(lines[1])
let c = parseFloat(lines[2])
let pi = 3.14159

let areaT = (a*c)/2

console.log(`TRIANGULO: ${areaT.toFixed(3)}`)

let areaC = pi * (c*c)

console.log(`CIRCULO: ${areaC.toFixed(3)}`)

let areaTrap = ((a+b)*c)/2

console.log(`TRAPEZIO: ${areaTrap.toFixed(3)}`)

let areaQ = b * b

console.log(`QUADRADO: ${areaQ.toFixed(3)}`)

let areaR = a*b

console.log(`RETANGULO: ${areaR.toFixed(3)}`)