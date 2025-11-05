/*Conceito:
O método map() cria um novo array com os resultados da aplicação de uma função para cada elemento do array original.

Características:
Não altera o array original.
Retorna um novo array com a mesma quantidade de elementos.
É muito usado para transformar dados.
*/ 

let precosUSD = [10, 25.50, 8, 100, 35.25];

let precoBR = precosUSD.map((valor) => (valor * 5.00).toFixed(2))

console.log(`O Valor em real é: ${precoBR}`)