const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);   // undefined

pessoa.telefone = "11 23323223";
console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";
console.log(pessoa);

const novaPessoa = {
    nome: "Pedro",
}

// pessoa = novaPessoa; 
// const nao pode ser reatribuido apenas, mas pode ter seus valores mudados

// FORMAS DE DELETAR ATRIBUTOS:
// delete pessoa.profissao; 
// console.log(pessoa);

// deletes podem retornar booleanos
// const delProp = delete pessoa.profissao
// const delPropInexistente = delete pessoa["endereco"]

// console.log(delProp) //true
// console.log(delPropInexistente) //true