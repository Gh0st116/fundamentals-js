const notas = [6, 7, 8, 9];

// mesmo pointer para os dois arrays, então ambos são alterados
// const novasNotas = notas;

// spread operator => valores sao copiados, e nao altera os valores originais
const novasNotas = [5, ...notas, 10];

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);