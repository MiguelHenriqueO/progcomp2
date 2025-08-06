/*let produto = {
    nome: "play2",
    desc: "playstation 2, lenda dos games",
    preco: 200.00,
    conteudo: "dois controles zero, crash bandicoot, twisted metal e black (99% original)"

};

console.log(produto.nome);
console.log(produto.desc);
console.log(produto.preco);
console.log(produto.conteudo); */

// vetor de objetos

/*let produtos = [
    {
        nome: "play2",
        desc: "playstation 2, lenda dos games",
        preco: 200.00,
        conteudo: "dois controles zero, crash bandicoot, twisted metal e black (99% original)"
    },
    {
        nome: "play4",
        desc: "jogo caro pra porra",
        preco: 2500,
        conteudo: "um controle e o console (se fode ae)"
    },
    {
        nome: "play5",
        desc: "play4 v2",
        preco:5000,
        conteudo: "console e controle sem leitor de disco(se quiser compra)"
    }
];

for(let i =0; i<produtos.length;i++){
    console.log(`produto ${i}: ${produtos[i].nome}`)
    console.log(`descrição: ${produtos[i].desc}`)
    console.log(`preço: ${produtos[i].preco}`)
    console.log(`conteúdo: ${produtos[i].conteudo}`)

}

for(let i =0; i<produtos.length;i++){
    if(produtos[i].preco>=1000){
        console.log(`o produto ${produtos[i].nome} custa mais de 1000 reais`)
    }
} */

let produtos = []; 

for(let i =0; i<3;i++){
    let nome = prompt(`Informe o nome do produto ${i+1}`);
    let desc = prompt(`Informe o nome do produto ${i+1}`);
    let preco = prompt(`Informe o nome do produto ${i+1}`);
    let conteudo = prompt(`Informe o nome do produto ${i+1}`);

    let produto = {
        nome:nome,
        desc:desc,
        preco:preco,
        conteudo:conteudo
    };
    produtos.push(produto)
}


