const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
    {
        rua: "Rua dos Bobos",
        numero: 0,
        apartamento: false,
    },
];

cliente.enderecos.push({
    rua: "Rua Sapo Kaya",
    numero: 1660,
    apartamento: true,
    complemento: "ap. 404",
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);
