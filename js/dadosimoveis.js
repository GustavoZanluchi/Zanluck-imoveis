
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

    mensagem.textContent = 'Imóvel removido!';
    mensagem.style.color = 'red';

    setTimeout(() => {
        mensagem.textContent = '';
    }, 3000);
}

function salvarImoveis() {
    localStorage.setItem('imoveis', JSON.stringify(imoveis));
}

exibirImoveis();