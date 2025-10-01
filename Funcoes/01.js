function mostrarDobro(x){
    console.log(`O dobro de ${x} é ${x*2}`)
}

function calcularQ(x){
   return x*x
}

function main(){
    let a = Number(prompt(`informe um numero`))
    mostrarDobro(a)
    console.log(`Quadrado ${calcularQ(a)}`)
}
main()

