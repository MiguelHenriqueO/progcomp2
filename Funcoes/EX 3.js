let vendas = [
    { produto: "Notebook", categoria: "Informática", valor: 3500, quantidade: 2 },
    { produto: "Mouse", categoria: "Informática", valor: 80, quantidade: 5 },
    { produto: "Camiseta", categoria: "Moda", valor: 50, quantidade: 10 },
    { produto: "Tênis", categoria: "Moda", valor: 250, quantidade: 4 },
    { produto: "Livro", categoria: "Educação", valor: 40, quantidade: 7 },
    { produto: "Tablet", categoria: "Informática", valor: 1500, quantidade: 1 }
]

let totalInformatica
let totalModa
let totalEducacao
let maisVendas = totalInformatica

vendas.forEach((obj) =>{
    
    if (obj.categoria === "Informática"){
        totalInformatica = obj.valor * obj.quantidade
    }
    else if (obj.categoria === "Moda"){
        totalModa = obj.valor * obj.quantidade
    }
    else if (obj.categoria === "Educação"){
        totalEducacao = obj.valor * obj.quantidade
    }

   if (maisVendas < totalModa){
    maisVendas = totalModa
   }
   else if (maisVendas < totalEducacao){
    maisVendas = totalEducacao
   }

})

