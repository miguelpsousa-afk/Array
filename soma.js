const prompt = require('prompt-sync')();

let soma = 0;

const quantidade = parseInt(prompt("Quantos números deseja cadastrar? "))
const numeros = [];

for (let i = 0; i < quantidade; i++){
    numeros.push(parseInt(prompt(`Digite o numero ${i + 1}: `)));

    soma = soma + numeros[i];
}

console.log(soma);