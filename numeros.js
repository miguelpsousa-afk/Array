const prompt = require('prompt-sync')();

const quantidade = parseInt(prompt("Quantos números deseja cadastrar? "))
const numeros = [];

for (let i = 0; i < quantidade; i++){
    numeros.push(prompt(`Digite o numero ${i + 1}`));
}

console.log(numeros[numeros.length]);