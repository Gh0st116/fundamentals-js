const nome = "Juan";
const idade = new Date().getFullYear - 2003;
const cidadeNatal = "Sapucaia do Sul";

// const apresentacao = "meu nome é " + nome + " , minha idade é " + idade +  ", e nasci na cidade de " + cidadeNatal;
const apresentacao = `meu nome é ${nome}, minha idade é ${idade}, e nasci na cidade de ${cidadeNatal}`;

console.log(apresentacao);