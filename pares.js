const prompt = require('prompt-sync')();

let par = 0;

const quantidade = parseInt(prompt("Quantos números deseja cadastrar? "))
const numeros = [];

for (let i = 0; i < quantidade; i++){
    numeros.push(prompt(`Digite o numero ${i + 1}`))
    if (numeros[i] % 2 == 0){
        par++
    }else{
        console.log(`O número ${numeros[i]} é ímpar!`)
    }
}
console.log(`A quantidade de números pares é: ${par}`)
