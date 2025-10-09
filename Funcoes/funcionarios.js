function listarFuncionario(funcionario){
    for(let i = 0; i < funcionario.length; i++){
        console.log(funcionario[i])
    }
}

function cadastroInicial(funcionario){
    funcionario.push({nome: "Ana", cargo:"dev",salario:5000})
    funcionario.push({nome: "Carlos", cargo:"Estagiario",salario:1800})
    funcionario.push({nome: "Beatriz", cargo:"BDA",salario:10000})
}

function aumentoSalarial(funcionario){
    for (let i = 0; i < funcionario.length; i++){
        funcionario[i].salario *= 1.10
    }
    return "Salarios atualizados!"
}

function buscaSalario(funcionario, nome){
    for(let i = 0; i < funcionario.length; i++){
        if(funcionario[i].nome == nome){
            console.log(funcionario[i].salario)
            return
        }
    }
}

function promocao(funcionario, nome){
    for(let i = 0; i < funcionario.length; i++){
        if(funcionario[i].nome == nome){
            funcionario[i].cargo = prompt(`Informe o novo cargo: `)
        }
    }
}

function novoFuncionario(funcionario){
    funcionario.push({
        nome:prompt(`Informe o nome do funcionario: `),
        cargo:prompt(`Informe o cargo do funcionario: `),
        salario:Number(prompt(`Informe o salario do funcionario: `))
    })
}

function removerFuncionario(funcionario, nome){
    for(let i = 0; i < funcionario.length; i++){
        if(funcionario[i].nome == nome){
            funcionario.splice(i,1)
            alert("Aluno removido")
        }
        
    }
}

function mediaSalarial(funcionario){
    let soma = 0
    for(let i = 0; i < funcionario.length; i++){
        soma += funcionario[i].salario    
    }
    return soma
}

function main(){
    let vetor = []
    cadastroInicial(vetor)
    let opcao = 0
    do {
        opcao = Number(prompt(`Infome a opção desejada: \n1. adicionar novo funcionário \n2. Listar funcionários \n3. Aumento salarial geral \n4. Busca salário \n5. mudar cargo \n6. media salarial da empresa \n7. remover funcionário \n8. encerrar`))
        switch (opcao) {
            case 1:novoFuncionario(vetor); break;
            case 2:listarFuncionario(vetor); break;
            case 3:aumentoSalarial(vetor); break;
            case 4: let busca4 = prompt(`Informe o nome do funcionario que deseja saber o salário: `)
                buscaSalario(vetor, busca4); break;
            case 5: let busca5 = prompt(`Informe o nome do funcionario que deseja alterar o cargo: `)
                promocao(vetor, busca5); break;
            case 6:console.log(`Media salarial da empresa: `, mediaSalarial(vetor));break;
            case 7:let busca7 = prompt(`Informe o nome do funcionario que deseja remover: `)
                removerFuncionario(vetor, busca7); break
            case 8:promocao
            case 10:alert("Programa encerrado");break;
            default:alert("opcao invalida")
                break;
        }
    } while (opcao != 10);
}
main()

// desafio

function promocaoAbaixo(funcionario){
    for(let i = 0; i < funcionario.length; i++){
        if(funcionario[i].salario < mediaSalarial(funcionario)){
            funcionario[i].cargo = "Analista Junior"
            funcionario[i].salario *= 1.15
        }
    }
}

function maiorSalario(funcionario){
    let maiorSalario = []
    for(let i = 0; i < funcionario.length; i++){
        if(funcionario[i].salario > maiorSalario[i].salario){
            maiorSalario[i] = funcionario[i]
        }
    }
}