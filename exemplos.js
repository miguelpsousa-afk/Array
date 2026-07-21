const nomes = ['Alice', 'Bob', 'Charlie']
//Adicionar ao final
nomes.push('David')
console.log(nomes);// --> ['Alice', 'Bob', 'Charlie', 'David']

//Remover do final
let removido = nomes.pop()
console.log(removido); // 'David
console.log(nomes); // ['Alice', 'Bob', 'Charlie']

//Adicionar ao início
nomes.unshift('Zoe');
console.log(nomes); // ['Zoe', 'Alice', 'Bob', 'Charlie', 'David']

//Remover do início
nomes.shift();
console.log(nomes); // ['Alice', 'Bob', 'Charlie']

//Mostrar numero total

nomes = ['Alice', 'Bob', 'Charlie'];
console.log(nomes.length); // 3