const notas = ["10","7","3","5","9","2","1","4","6","8"]
let somaNotas = 0
let mediaNotas = 0
let aprovado = 0

notas.forEach(function(nota,indice) {
    console.log(nota)
    somaNotas += nota
   
    if (nota >= 7) {
        aprovado++
    }
    if (indice % 2 == 0){
        console.log(`posição par: ${nota}`)
    }
})

 mediaNotas = somaNotas / notas.length
 console.log(`media das notas é: ${mediaNotas}`)
 console.log(`soma das notas é: ${somaNotas}`)
 console.log(`${aprovado} alunos foram aprovados`)
 
 
