document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.ver-imoveis');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            window.location.href = 'imoveis.html'; 
        });
    });

    const botoao = document.querySelector('.ver-imoveis');
    botao.addEventListener('click', () => {
        window.location.href = 'imoveis.html'; 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.anuncie');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            window.location.href = 'anuncie.html'; 
        });
    });

    const botoao = document.querySelector('.anuncie');
    botao.addEventListener('click', () => {
        window.location.href = 'anuncie.html'; 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.voltar');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            window.location.href = 'zanluck imoveis.html'; 
        });
    });

    const botoao = document.querySelector('.voltar');
    botao.addEventListener('click', () => {
        window.location.href = 'zanluck imoveis.html'; 
    });
});

const form = document.getElementById('form-imovel');
const lista = document.getElementById('lista-imoveis');
const imoveis = JSON.parse(localStorage.getItem('imoveis')) || [];

const mensagem = document.createElement('p');
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
}, 4000);
});

function exibirImoveis() {
lista.innerHTML = '';
imoveis.forEach((imovel, index) => {
    lista.innerHTML += `
    <div class="imovel-card">
        <button class="btn-deletar" onclick="deletarImovel(${index})" title="Deletar imóvel">X</button>
        <h3>Imóvel ${index + 1}</h3>
        <p><strong>Nome:</strong> ${imovel.nome}</p>
        <p><strong>Telefone:</strong> ${imovel.telefone}</p>
        <p><strong>Email:</strong> ${imovel.email}</p>
        <p><strong>CPF:</strong> ${imovel.cpf}</p>
        <p><strong>Endereço:</strong> ${imovel.endereco}</p>
        <p><strong>Cidade:</strong> ${imovel.cidade}</p>
        <p><strong>Tipo:</strong> ${imovel.tipo}</p>
        <p><strong>Finalidade:</strong> ${imovel.finalidade}</p>
        <p><strong>Descrição:</strong> ${imovel.descricao}</p>
    </div>
    `;
});
}

function deletarImovel(index) {
imoveis.splice(index, 1);
salvarImoveis();
exibirImoveis();
}

function salvarImoveis() {
    localStorage.setItem('imoveis', JSON.stringify(imoveis));
}

exibirImoveis();