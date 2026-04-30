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

nameValidate = campos[0].addEventListener("input", function () {
    if (campos[0].value.length < 2) {
        setError(0)
    } else {
        removeError(0); 
    };
});

campos[1].addEventListener("input", function() {
    if (emailRegex.test(campos[1].value)){
        removeError(1)
    } else {
        setError(1)
    };
});

campos[2].addEventListener("input", function(){
    if (campos[2].value.length < 8) {
        setError(2)
    } else {
        removeError(2)
    };
});

campos[3].addEventListener("input", function() {
    if (campos[3].value !== campos[2].value) {
        setError(3)
    }else {
        removeError(3)
    };
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

});

subimitButton.addEventListener('mousemove', function() {
    subimitButton.style.backgroundColor = '#0d1821f4'
});

subimitButton.addEventListener('mouseleave', function() {
    subimitButton.style.backgroundColor = '#0d1821'
});
