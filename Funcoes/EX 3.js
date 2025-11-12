let vendas = [
    { produto: "Notebook", categoria: "Informática", valor: 3500, quantidade: 2 },
    { produto: "Mouse", categoria: "Informática", valor: 80, quantidade: 5 },
    { produto: "Camiseta", categoria: "Moda", valor: 50, quantidade: 10 },
    { produto: "Tênis", categoria: "Moda", valor: 250, quantidade: 4 },
    { produto: "Livro", categoria: "Educação", valor: 40, quantidade: 7 },
    { produto: "Tablet", categoria: "Informática", valor: 1500, quantidade: 1 }
]

let totalInformatica = 0;
let totalModa = 0;
let totalEducacao = 0;
let maisVendas = totalInformatica
let campea = "Informática"

vendas.forEach((obj) =>{
    
    if (obj.categoria === "Informática"){
        totalInformatica += obj.valor * obj.quantidade
    }
    else if (obj.categoria === "Moda"){
        totalModa += obj.valor * obj.quantidade
    }
    else if (obj.categoria === "Educação"){
        totalEducacao += obj.valor * obj.quantidade
    }

   if (maisVendas < totalModa){
    campea = Moda
    maisVendas = totalModa
   }
   else if (maisVendas < totalEducacao){
    campea = Educacao
    maisVendas = totalEducacao
   }

})


console.log("Total Informática: R$", totalInformatica);
console.log("Total Moda: R$", totalModa);
console.log("Total Educação: R$", totalEducacao);
console.log("Categoria campeã:", campea, "com R$", maisVendas);

