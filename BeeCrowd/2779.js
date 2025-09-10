//2779
let total = parseInt(lines[0])
let pacote = parseInt(lines[1])

let nova = new Set()
for(let i = 2; i<= pacote+1; i++){
    nova.add(lines[i])
}

let faltam = total - nova.size
console.log(faltam)