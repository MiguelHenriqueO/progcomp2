function listarNomes(alunos) {
    for (let i = 0; i < alunos.length; i++) {
        console.log(alunos[i].nome)
    }
}
function aumentarIdade(alunos) {
    for (let aluno of alunos) {
        aluno.idade += 1
    }
}
function cadastroInicial(alunos){
    alunos.push({ nome: "Ana", idade: 20, curso: "Sistemas de Informação" })
    alunos.push({ nome: "Carlos", idade: 22, curso: "Ciência da Computação" })
    alunos.push({ nome: "Beatriz", idade: 19, curso: "Engenharia de Software" })
}
function cadastraNovo(alunos){
    alunos.push({
        nome: prompt(`Informe nome do novo aluno`),
        idade: Number(prompt(`Informe idade do novo aluno`)),
        curso: prompt(`Informe curso do novo aluno`),
    })
}
function removeAluno(alunos, nome){
    for(let i=0;i<alunos.length;i++){
        if (alunos[i].nome == nome){ // encontrei aluno
            alunos.splice(i, 1) // remove do vetor
            alert('Aluno removido com sucesso')
            return // sai da função
        }
    }
    // não encontrou
    alert('Aluno não encontrado')
}
function main(){
    let vetor = []
    cadastroInicial(vetor) // cadastro inicial
    let opcao
    do {
        opcao = Number(prompt(`Digite 1. Cria aluno 2. Lista nomes 3. Atualiza idade 4. Remove aluno 5. Sair`))
        switch(opcao){
            case 1: cadastraNovo(vetor); break;
            case 2: listarNomes(vetor); break;
            case 3: aumentarIdade(vetor); break;
            case 4: let nomeRemove = prompt(`Informe nome para remover`)
                    removeAluno(vetor, nomeRemove)
                    break
            case 5: alert('Programa encerrado'); break;
            default: alert('Opção inválida'); break;
        }
    }
    while (opcao != 5);
    console.log(vetor)
}
main()


function removeAluno(alunos, nome){
    for(let i=0;i<alunos.length;i++){
        if (alunos[i].nome == nome){ // achei
            alunos.splice(i, 1) // removeu
            return // sai da função
        }
    }
    alert('Aluno não encontrado')
}