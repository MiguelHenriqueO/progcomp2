let funcionarios = [], maiorS=0, mediasalario=0 , qntGerente = 0

for(let i = 0; i <6; i++){
    let funcionario = {
        nome:nome = prompt(`insira o nome do ${i+1}° funcionario`),
        cargo:cargo = prompt(`\nInforme o cargo do funcionario ${i+1}`).toLowerCase(),
        salario:salario = Number(prompt(`\ninforme o salário do funcionário ${i+1}`)),
        tempoServico:tempoServico = prompt(`\ninforme o tempo de serviço do funcionario ${i+1} (em anos)`)
    }
    funcionarios.push(funcionario)

}

for(let i = 0; i <6; i++ ){
    if(funcionarios[i].salario > 5000 && funcionarios[i].tempoServico > 5){
        console.log(`\nFuncionarios com mais de 5 anos e recebendo mais de R$5.000:  \n`,funcionarios[i])
    }

    maiorS = funcionarios[0]
    if(funcionarios[i].salario > maiorS.salario){
        maiorS = funcionarios[i]
    }

    mediasalario += funcionarios[i].salario

    if(cargo === "gerente"){
        qntGerente++
    }
}

console.log (`\nO maior salario é de: ${maiorS.nome}`)
console.log(`\nmedia salarial de: `, mediasalario / 6)
console.log(`\na empresa tem ${qntGerente} gerentes`)

