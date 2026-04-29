const nameInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const subimitButton = document.getElementById('submit-button');

const erroMessageName = document.querySelector('.msg-erro-name');
const erroMessageEmail = document.querySelector('.msg-erro-email');
const erroMessageSenha = document.querySelector('.msg-erro-senha');


subimitButton.addEventListener('click', (e) => {
    e.preventDefault()
    
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const senhaValue = senhaInput.value;

    // Checar nome
    if (nameValue === '') {
        erroMessageName.textContent = 'Informe o seu nome.'
        erroMessageName.classList = 'error';
    } else {
        erroMessageName.textContent = ''
        erroMessageName.classList = '';
    };

    // Checar e-mail
    if (emailValue === '') {
        erroMessageEmail.textContent = 'Informe o seu e-mail.'
        erroMessageEmail.classList = 'error';
    } else {
        erroMessageEmail.textContent = ''
        erroMessageEmail.classList = '';
    };

    // Checar senha
    if (senhaValue === '') {
        erroMessageSenha.textContent = 'Forneça sua senha.'
        erroMessageSenha.classList = 'error';
    } else {
        erroMessageSenha.textContent = ''
        erroMessageSenha.classList = '';
    };

});




subimitButton.addEventListener('mousemove', function() {
    subimitButton.style.backgroundColor = '#0d1821f4'
});

subimitButton.addEventListener('mouseleave', function() {
    subimitButton.style.backgroundColor = '#0d1821'
});
