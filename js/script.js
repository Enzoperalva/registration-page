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

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    isNameValidate = nameValidate();
    isEmailValidate = emailValidate();
    isSenhaValidate = senhaValidate();
    isConfirmValidate = confirmValidate();

    if (isNameValidate && isEmailValidate && isSenhaValidate && isConfirmValidate) {
        console.log('Validação de formulario ok!');
    }else {
        console.error('Erro na validação do formulario!');
    };
});

subimitButton.addEventListener('mousemove', function() {
    subimitButton.style.backgroundColor = '#0d1821f4'
});

subimitButton.addEventListener('mouseleave', function() {
    subimitButton.style.backgroundColor = '#0d1821'
});
