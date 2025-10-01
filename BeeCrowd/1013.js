var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// A entrada estará na primeira linha, com os 3 valores separados por espaço.
var [a, b, c] = lines.shift().split(' ').map(Number);

// Função para encontrar o maior entre dois números usando a fórmula fornecida.
function maior(x, y) {
  return (x + y + Math.abs(x - y)) / 2;
}

// Encontra o maior entre 'a' e 'b'.
var maiorAB = maior(a, b);

// Encontra o maior entre o resultado anterior ('maiorAB') e 'c'.
var maiorABC = maior(maiorAB, c);

// Imprime o resultado final no formato exigido.
console.log(maiorABC + " eh o maior");