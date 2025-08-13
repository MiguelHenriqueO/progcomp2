let biblio = [], maisPag = 0, mediaPag = 0, somaPag = 0

for(let i = 0; i < 5;i++){
    let titulo = prompt(`informe o titulo do ${i+i}° livro`)
    let autor = prompt(`\nInforme o autor do ${i+1}° livro`)
    let publicacao = prompt(`\ninforme o ano de publicação do ${i+1}° livro`)
    let quantiPag = prompt(`\nInforme a quantidade de páginas do ${i+1}° livro`)
    somaPag =+ biblio[i].quantiPag;

    let livros ={
        titulo:titulo,
        autor:autor,
        publicacao:publicacao,
        quantiPag:quantiPag,

    }
    biblio.push(livros)
}



for(let i = 0; i < 5;i++){
    if (biblio[i].quantiPag > 300){
        console.log(`\nLivros com mais de 300 paginas : \n`,biblio[i])
    }  

    mediaPag =+ biblio[i].quantiPag;

    maisPag = biblio[0]

    if(maisPag < biblio[i].quantiPag){
        maisPag = biblio[i];
    }

}

// exibir
console.log(`\na média de paginas é de: `,mediaPag / 5)
console.log(`\no livro com mais paginas é: `,maisPag)


