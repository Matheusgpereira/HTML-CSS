function adicionarFilme() {
    var filmeFavorito = document.getElementById('filme').value // .value = pegar o valor do id.
    var elementoListaFilmes = document.getElementById('listaFilmes') //.getElementById = função de pegar um documento pelo id. 
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src=' + filmeFavorito + '>'
    document.getElementById('filme').value = ''
}
//https://s2.glbimg.com/1SEyI21pWu8q-3ydMB6kqMMGELs=/0x0:2000x1202/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/u/Y/7rgbnyR8AizUbcIO4wQw/hp-capa.jpg