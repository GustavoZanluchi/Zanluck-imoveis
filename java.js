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