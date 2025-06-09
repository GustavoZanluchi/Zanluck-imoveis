const form = document.getElementById('form-imovel');
const lista = document.getElementById('lista-imoveis');
const imoveis = JSON.parse(localStorage.getItem('imoveis')) || [];
const mensagem = document.createElement('p');
const telefoneInput = document.getElementById('Telefone');

telefoneInput.addEventListener('input', function () {
    let input = telefoneInput.value.replace(/\D/g, '');

    if (input.length > 0) {
    input = '(' + input;
    }
    if (input.length > 3) {
    input = input.slice(0, 3) + ') ' + input.slice(3);
    }
    if (input.length > 10) {
    input = input.slice(0, 10) + '-' + input.slice(10, 14);
    }

    telefoneInput.value = input.slice(0, 15);
});

mensagem.style.color = 'green';
mensagem.style.fontWeight = 'bold';
mensagem.style.marginTop = '1rem';
form.insertAdjacentElement('afterend', mensagem);

form.addEventListener('submit', (e) => {
e.preventDefault();

const imovel = {
    nome: document.getElementById('nome').value,
    telefone: document.getElementById('Telefone').value,
    email: document.getElementById('Email').value,
    cpf: document.getElementById('cpf').value,
    endereco: document.getElementById('endereco').value,
    cidade: document.getElementById('cidade').value,
    tipo: document.getElementById('imovel').value,
    finalidade: document.getElementById('finalidade').value,
    descricao: document.getElementById('descricao').value
};

imoveis.push(imovel);
salvarImoveis();
exibirImoveis();
form.reset();

mensagem.textContent = 'Imóvel cadastrado com sucesso!';
setTimeout(() => {
    mensagem.textContent = '';
}, 3000);
});