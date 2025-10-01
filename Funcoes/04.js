function main(){
    let cidades = []
    carregarCidades(cidades)
    padronizarNomes(cidades)
    marcarInterior(cidades)
    exibirCidades(cidades)

}

function carregarCidades(vetor){
    vetor.push("São Paulo", "Campinas", "Santos", "Sorocaba", "Caraguatatuba")
}

function padronizarNomes(vetor){
    for(let i=0; i <vetor.length; i++){
        vetor[i] = vetor[i].toUpperCase()
    }
}

function marcarInterior(vetor){
    for(let i =0; i<vetor.length;i++){
        if(vetor[i][0] == "C"){
            vetor[i] = `INTERIOR - ${vetor[i]}`
        }
    }  
}

function exibirCidades(vetor){
    console.log(vetor)
    
}






main()