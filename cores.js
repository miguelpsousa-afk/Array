const prompt = require('prompt-sync')();

const quantidade = parseInt(prompt("Quantos números deseja cadastrar? "))
const cores = [];

for (let i = 0; i < quantidade; i++){
    cores.push(prompt(`Digite a cor ${i + 1}`));
}

console.log(cores[0]);// 1º
console.log(cores[cores.length - 1]); // ultimo