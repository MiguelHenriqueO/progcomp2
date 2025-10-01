function leitura(vet){
    vet.push("joao", "pedro", "maria", "roberto", "alan")
}

function nomeMaiusculo(vet){
    for(let i=0; i <vet.length; i++){
        vet[i] = vet[i].toUpperCase()
    }
}

function anonimo(vet){
    
    for(let i =0; i<vet.length;i++){
        if(vet[i][0] == "A"){
            vet[i] = "ANONIMO"
        }
    }  
     
}
function escreve(vet){
    console.log(vet)
}
function main(){
    let alunos =[]

    leitura(alunos)
    nomeMaiusculo(alunos)
    anonimo(alunos)
    escreve(alunos)
}

main();