var likes = document.querySelectorAll('.js-like');
var filtro = document.querySelectorAll('.procura_titulo');
var noticias = document.querySelectorAll('.noticia');
var input = document.querySelector('.procura_input');

for (let like of likes) {
    like.addEventListener('click', () => liked(like));
}

function liked(item) {
    if (item.classList.contains('far')) {
        item.classList.remove('far');
        item.classList.add('fas')
    } else {
        item.classList.remove('fas');
        item.classList.add('far')
    }
}

input.onkeyup = function() {
    var valorInput = input.value;
    for (var i = 0; i < noticias.length; i++) {
        var conteudoTitulo = filtro[i].innerText;
        var corresponde = conteudoTitulo.toLowerCase().indexOf(valorInput) >= 0;
        noticias[i].style.display = corresponde ? '' : 'none';
    }
};