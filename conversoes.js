// tipos de dado
// booleanos

// conversao implicita
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString); // true
console.log(numero === numeroString); // false

console.log(numero + numeroString); // "456456"


// conversao explicita

// Number()
// String()
console.log(numero + Number(numeroString));