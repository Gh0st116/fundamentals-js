const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado.\nSaldo atual: ${this.saldo}`);
        }
    },
};

cliente.efetuaPagamento(25);
cliente.efetuaPagamento(250); // Saldo insuficiente
