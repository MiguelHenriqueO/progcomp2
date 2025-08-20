let mat=[]

for(let i = 0; i < 4; i ++){
    mat[i] = []
    for(let j=0;j <7;j++){
        mat[i][j] = parseInt(Math.random()*1000)
    }
}
console.log(mat)

/*
for(let i = 0; i < 4; i ++){
    for(let j=0;j <7;j++){
        
    }
}
*/
let totalVendedor 

for(let i = 0; i < mat.length; i ++){
    totalVendedor = 0
    for(let j=0;j <mat[i].length;j++){
        totalVendedor += mat[i][j]
    }
    console.log(`vendedor ${i}° vendeu: ${totalVendedor}`)
}
let somaDia = 0

for(let j=0;j <7;j++){
    somaDia = 0
    for(let i = 0; i < 4; i ++){
        somaDia += mat[i][j]
    }
    console.log(`soma das vendas do dia ${j}°:  ${somaDia}`)
}

let maior = mat[0][0]
let iMaior = 0
let jMaior = 0

for(let i = 0; i < 4; i ++){
    for(let j=0;j <7;j++){
        if(mat[i][j]>maior){
            maior= mat[i][j]
            iMaior = i
            jMaior= j
        }
    }
}
console.log(`a maior venda foi de R$ ${maior} na posição [${iMaior}][${jMaior}]`)

let media = 0
for(let j=0;j <7;j++){
    
    for(let i = 0; i < 4; i ++){
        media += mat[i][j]
    }
    
}
console.log(`media das vendas é de R$${media/(mat.length * mat[0].length)}`)
