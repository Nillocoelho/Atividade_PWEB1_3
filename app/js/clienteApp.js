let clienteControler = new ClienteController();
clienteControler.listar();
const cli1 = new Cliente('Paulo', "1245369");
const cli2 = new Cliente('Danillo', "1245369");
const cli3 = new Cliente('Claudio', "1245369");
console.log('Cliente: ' + cli1.nome);
console.log('Cliente: ' + cli2.nome);
console.log('Cliente: ' + cli3.nome);
