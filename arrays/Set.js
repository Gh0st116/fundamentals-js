const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Set nao permite repeticoes de valores
const meuSet = new Set(nomes);

// convertendo Set para array
const nomesAtualizados = [...meuSet]

// forma mais compacta:
// const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);