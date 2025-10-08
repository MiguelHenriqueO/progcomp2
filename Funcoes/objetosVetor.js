function listarNomes(alunos){
    for(let i = 0; i < alunos.length ; i++){
        console.log(alunos[i].nome)
    }
}
function aumentarIdade(alunos){
    for(let i = 0; i < alunos.length ; i++){
        alunos.idade += 1
    }
}

function cadastroInicial(alunos){
    alunos.push({nome: "Ana", idade:20,curso:"Sistemas da informação"})
    alunos.push({nome: "Carlos", idade:22,curso:"Ciência da Computação"})
    alunos.push({nome: "Beatriz", idade:19,curso:"Engenharia de software"})
}

function cadastrarNovo(alunos){
    alunos.push({
        nome:prompt(`informe o nome do aluno novo`),
        idade:Number(prompt(`informe a idade do aluno novo`)),
        curso:prompt(`informe curso do novo aluno`)
    
    })
}

function main(){
    let vetor = []
    cadastroInicial(vetor)
    let opcao
    do{
        opcao = Number(prompt(`digite 1. cria aluno 2. lista nomes 3. atualiza idade 4. remove aluno 5. sair`))
        switch(opcao){
            case 1: cadastrarNovo(vetor); break;
            case 2: listarNomes(vetor); break;
            case 3: aumentarIdade(vetor); break;
            case 4: alert(`Program encerrado`); break;
            default: alert(`Opção inválida`); break;

        }
    }while(opcao != 4);
    console.log(vetor)
}
main()