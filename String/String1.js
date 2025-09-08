let palavra = prompt("Informe uma palavra: \n")
let limpa = palavra.trim()
let vetor = limpa.split("")
let invertida = vetor.reverse()
let invertidaS = invertida.join("")

if (invertidaS === limpa){
    console.log("essa é uma palavra palíndroma")

} else{
    console.log("errou otário")
}

/*
let palavra = prompt("Informe uma palavra")
let invertida = palavra.trim().split("").reverse().join()

if (palavra.trim() === invertida){ // compara duas strings
    alert('São palíndromas')
}
else alert('Não são palíndromas')
*/