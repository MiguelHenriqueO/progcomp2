var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.trim().split("\n").map(Number);

let par = [];
let impar = [];

for (let i = 0; i < lines.length; i++) {
  let num = lines[i];

  if (num % 2 === 0) {
    par.push(num);
    if (par.length === 5) {
      for (let j = 0; j < 5; j++) {
        console.log(`par[${j}] = ${par[j]}`);
      }
      par = [];
    }
  } else {
    impar.push(num);
    if (impar.length === 5) {
      for (let j = 0; j < 5; j++) {
        console.log(`impar[${j}] = ${impar[j]}`);
      }
      impar = [];
    }
  }
}

// imprime o que sobrou
for (let i = 0; i < impar.length; i++) {
  console.log(`impar[${i}] = ${impar[i]}`);
}
for (let i = 0; i < par.length; i++) {
  console.log(`par[${i}] = ${par[i]}`);
}
