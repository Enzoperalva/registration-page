function clicar() {
    window.alert('OLa')
}
let botao = document.getElementById('botao')

document.getElementById('botao').addEventListener('mousemove', function() {
    botao.style.backgroundColor = '#0d1821f4'
});
document.getElementById('botao').addEventListener('mouseleave', function(){
    botao.style.backgroundColor = '#0d1821'
});