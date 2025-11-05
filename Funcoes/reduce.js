/*Conceitos
executa uma função acumuladora em cada elemento do array (da esquerda para a direita), resultando em um único valor final.

Por que ensinar reduce()?

Porque ela permite condensar um array em um único valor.

É extremamente poderosa para cálculos acumulados (como somas, médias, contagens, objetos agrupados etc.).

Junto com map e filter, o reduce compõe o "trio funcional" mais comum em JavaScript moderno.

*/

let vendas = [150, 300, 50, 450, 100];

let totalVendas = vendas.reduce((current, num)=> current + num)

console.log(`total em vendas do dia foi: ${totalVendas}`)
