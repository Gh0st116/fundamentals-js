const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
};

// Object.create() copia o objeto original sem utilizar o mesmo pointer
const objPersonagem2 = Object.create(objPersonagem);
objPersonagem2.nome = "Gandalf, o Cinzento";

console.log(objPersonagem.nome); // Gandalf
console.log(objPersonagem2.nome); // Gandalf, o Cinzento
