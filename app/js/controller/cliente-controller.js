class ClienteController {
    constructor() {
        this.inputNome =
            document.querySelector("#nome");
        this.inputCPF =
            document.querySelector("#cpf");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value, this.inputCPF.value);
        this.clientes.inserir(novoCliente);
        this.inserirContaNoHTML(novoCliente);
    }
    listar() {
        this.clientes.listar().forEach(conta => {
            this.inserirContaNoHTML(conta);
        });
    }
    inserirContaNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
