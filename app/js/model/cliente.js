class Cliente {
    constructor(nome, cpf) {
        this._nome = nome;
        this._cpf = cpf;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    toString() {
        return `- Nome: ${this._nome}
        - Cpf: ${this._cpf}`;
    }
}
