class ClienteEspecial extends Cliente{

    private clientesDependentes: Array<ClienteEspecial>;

    constructor(nome:string, cpf:string){
        super(nome,cpf);

    }

    inserirDependente(dependente: ClienteEspecial): void{
        this.clientesDependentes.push(dependente);
    }

    removerDependente(cpf: string): void{
        const dependenteARemover = this.pesquisar(cpf);
    }

    pesquisar(cpf: string): ClienteEspecial{
        return this.clientesDependentes.find(cliente => cliente.cpf === cpf);

    }

    listarDependentes(): Array<ClienteEspecial>{
        return this.clientesDependentes;
    };


}