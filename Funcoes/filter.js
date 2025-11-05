/* Conceito:
O método filter() cria um novo array contendo apenas os elementos que passam no teste (função de callback retorna true).

Características:
Não altera o array original.
Retorna um novo array com quantidade igual ou menor de elementos.
Muito útil para filtrar dados com base em uma condição.

*/

let idades = [12, 17, 25, 15, 34, 60, 8];

let adultos = idades.filter((idade) =>idade >= 18)

console.log(`Os adultos tem: ${adultos} anos de idade`)