const textoUm = "Olá mundo!";
const textoDois = "Olá mundo!";
const senhaSegura = "senhaSegura321";
const stringNumeros = "123123";

const citacao = "Meu nome é ";
const nome = "Juan";


// Concatenação (+)
console.log(citacao + nome);


// Template string OU template literal
const a = 5;
const b = 10;

console.log(`Quinze é ${a + b} e
não ${2 * a + b}.`);
// "Quinze é 15 e
// não 20."


// Unicode
const cifrao = "\u0024";
const aMaiusculo = "\u0041";
const tique = "\u2705";
const hiragana = "\u3041";

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);


// Comparacao strings
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true


// Tamanho string
const senha = "minhaSenha123";
console.log(senha.length); // 13 caracteres
