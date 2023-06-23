const nomes = ["Evaldo", "Mari", "Camis"];

// Declaracao padrao de funcao
// array.forEach(function (nome) {
//     console.log(nome);
// });

// Arrow function
// array.forEach(nome => {
//     console.log(nome);
// });

// Utilizando o callback da funcao imprimeNome
function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);
