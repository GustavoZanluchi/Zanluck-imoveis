document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const msg = document.getElementById('msg');

    if (user === 'admin' && pass === '1234') {
    msg.style.color = 'green';
    msg.textContent = 'Login realizado com sucesso!';
    setTimeout(() => {
    window.location.href = 'zanluck imoveis.html'; 
}, 1500);
} else {
    msg.style.color = 'red';
    msg.textContent = 'Usuário ou senha incorretos.';
}
});