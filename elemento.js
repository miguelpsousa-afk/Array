const prompt = require('prompt-sync')();

const elementos = ['água', 'terra', 'fogo'];
console.log(elementos)

elementos.push(prompt('Digite um novo elemento: '))

console.log(elementos)