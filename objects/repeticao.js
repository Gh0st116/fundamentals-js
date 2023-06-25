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

for (let chave in cliente) {
    let tipo = typeof cliente[chave];

    // Tratamento para evitar saídas indesejadas
    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}
