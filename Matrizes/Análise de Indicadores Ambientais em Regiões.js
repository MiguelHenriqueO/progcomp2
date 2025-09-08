let reg = []
let dias = []

for(let i= 0; i < 5;i++){
    reg.push(prompt(`informe o nome da região ${i+1} :  `))
}
for(let i =0;i<5;i++){
    dias.push(Number(prompt(`informe o dia ${i+1}`)))
}

//Exibir qual região (linha) teve o maior índice de poluição registrado e em qual dia (coluna) isso ocorreu.
//Calcular e exibir quantas vezes o índice foi superior a 300 (nível crítico).

let poluicao = []
let crit = 0
for(let i=0;i<5;i++){
    poluicao[i]=[]
    for(let j = 0; j<5;j++){
        do{
            poluicao[i][j] = prompt(`informe poluição da região ${reg[i]} no dia ${dias[j]}`)

        }while(poluicao[i][j]<0||poluicao[i][j]>500)
        if(poluicao[i][j]> 300){
            crit++
        }
    }
}


//Exibir todos os valores da diagonal principal e calcular a sua média
//Exibir todos os valores da diagonal secundária e calcular a sua média.
let somaDP=0

for(let i =0 ;i<5;i++){
    console.log(`elemento diagonal principal`)
    somaDP += poluicao[i][i]        
}
console.log(`a media da DP é ${somaDP/poluicao.length}`)

let somaDS=0
for(let i=0;i<poluicao.length;i++){
    console.log(`elemento da diagonal secundaria:  ${poluicao[i][poluicao.length-i]}`)
    somaDS += poluicao[i][poluicao.length-i]
}
console.log(`a media da DS é ${somaDS/poluicao.length}`)

let iMaior =0; let jMaior=0; let maior = poluicao[0][0]
for(let i=0; i<5;i++){
    for(let j =0;j<5;j++){
        if(poluicao[i][j] > maior){
            maior=poluicao[i][j]
            iMaior = i; jMaior = j;
        }
    }
}
console.log(`o nivel ${maior} ocorreu na regiao ${reg[iMaior]} no dia ${dias[jMaior]}`)
console.log(`O nível critico foi atingido ${crit} vezes`)


//Exibir a região que teve, em média, o menor índice de poluição ao longo dos 5 dias.

let medias = []
let somaLinha 
for(let i = 0; i <poluicao.length; i++){
    somaLinha=0
    for(let j =0;j<poluicao.length;j++){
        somaLinha += poluicao[i][j]

    }
    medias.push = somaLinha / poluicao.length
    
}
let menor = medias[0]
let posMenor = 0
for(let i=0;i<poluicao.length;i++){
    if(medias[i] < menor){
        menor= medias[i]
        posMenor = i
    }
}
console.log(`A regiao com menor média ${menor} foi ${reg[posMenor]}`)
