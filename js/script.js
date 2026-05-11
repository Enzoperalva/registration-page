const form = document.getElementById('form');
const campos = document.querySelectorAll('.input');
const spans = document.querySelectorAll('#span-required');
const subimitButton = document.getElementById('submit-button');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


function setError(index){
    campos[index].style.border = '3px solid #982821';
    spans[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none'; 
};
function nameValidate() {
    if (campos[0].value.length < 2){
        setError(0)
        return false;
    }else {
        removeError(0)
        return true;
    };
};

function emailValidate(){
    if (!emailRegex.test(campos[1].value)){
        setError(1)
        return false
    }else {
        removeError(1);
        return true;
    };
};

function senhaValidate(){
    if (campos[2].value.length < 8){
        setError(2)
        return false;
    }else {
        removeError(2)
        return true;
    };
};

function confirmValidate(){
    if (campos[2].value == campos[3].value && campos[3].value.length >= 8){
        removeError(3)
        return true;
    }else {
        setError(3)
        return false;
    };
};

campos[0].addEventListener("input", nameValidate);
campos[1].addEventListener("input", emailValidate);
campos[2].addEventListener("input", senhaValidate);
campos[3].addEventListener("input", confirmValidate);

console.log('CHEGOU ATE AQUI')
form.addEventListener("click", (event) => {
    event.preventDefault()
    
    const formOk = false;
    isNameValidate = nameValidate();
    isEmailValidate = emailValidate();
    isSenhaValidate = senhaValidate();
    isConfirmValidate = confirmValidate();


    if (isNameValidate && isEmailValidate && isSenhaValidate && isConfirmValidate) {
        formOk = true;
        // export default formOk;
        console.log(formOk);
        console.log('Validação de formulario ok!');
    }else {
        console.error('Erro na validação do formulario!');
    };
});

function mostrarSenha(){
    const btnShowPass = document.getElementById('btn-senha');

    if(campos[2].type === 'password'){
        campos[2].setAttribute('type', 'text');
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        campos[2].setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    };
}

function mostrarSenhaDois(){
    const btnShowPassDois = document.getElementById('btn-senha-dois');

    if(campos[3].type === 'password'){
        campos[3].setAttribute('type', 'text');
        btnShowPassDois.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        campos[3].setAttribute('type', 'password')
        btnShowPassDois.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    };
};

subimitButton.addEventListener('mousemove', function() {
    subimitButton.style.backgroundColor = '#0d1821f4'
});

subimitButton.addEventListener('mouseleave', function() {
    subimitButton.style.backgroundColor = '#0d1821'
});
