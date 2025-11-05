const notas = ["10","7","3","5","9","2","1","4","6","8"]
let somaNotas = 0
let mediaNotas = 0
let aprovado = 0
let posicoesPares = []

// forEach pode ser utilizado tanto da forma notas.forEach((nota,indice) => {} em que é uma function sem nome em seta e notas.forEach(function(nota,indice) {} que é uma function com nome

notas.forEach((nota,indice) => {
    console.log(nota)
    somaNotas += nota
   
    if (nota >= 7) {
        aprovado++
    }
    if (indice % 2 == 0){
        posicoesPares.push(nota)
    }
})

 mediaNotas = somaNotas / notas.length
 console.log(`media das notas é: ${mediaNotas}`)
 console.log(`soma das notas é: ${somaNotas}`)
 console.log(`${aprovado} alunos foram aprovados`)
 console.log(`notas nas posições pares: ${posicoesPares}`)
 
 
