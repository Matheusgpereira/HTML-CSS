var listaFilmes = [ //não e totalmente preciso definir a posição de cada item va lista.
    "https://upload.wikimedia.org/wikipedia/pt/d/dc/Notting_Hill.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/b/b4/DVD_High_School_Musical.JPG",
    "https://br.web.img3.acsta.net/medias/nmedia/18/87/29/75/19874043.jpg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg",
    "https://br.web.img3.acsta.net/c_310_420/pictures/210/168/21016896_20130701202610322.jpg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg",
]
//listaFilmes[0] = 'https://upload.wikimedia.org/wikipedia/pt/d/dc/Notting_Hill.jpg';   
//listaFilmes[1] = 'https://upload.wikimedia.org/wikipedia/pt/b/b4/DVD_High_School_Musical.JPG';
//listaFilmes[2] = 'https://br.web.img3.acsta.net/medias/nmedia/18/87/29/75/19874043.jpg';
//listaFilmes[3] = 'https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg';

var listaSeries = [
    "https://br.web.img3.acsta.net/pictures/14/01/23/13/30/209537.jpg",
    "https://br.web.img2.acsta.net/pictures/22/09/23/20/14/0505071.jpg",
    "https://de.web.img2.acsta.net/pictures/21/05/14/08/25/4008276.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/9/9c/Arrow_season_8.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/thumb/7/77/TheFreshPrinceOfBel-Air.jpg/245px-TheFreshPrinceOfBel-Air.jpg",
    "https://br.web.img3.acsta.net/pictures/22/11/30/19/53/5856320.jpg",
]
//listaSeries[0] = 'https://br.web.img3.acsta.net/pictures/14/01/23/13/30/209537.jpg';
//listaSeries[1] = 'https://br.web.img2.acsta.net/pictures/22/09/23/20/14/0505071.jpg';
//listaSeries[2] = 'https://de.web.img2.acsta.net/pictures/21/05/14/08/25/4008276.jpg';

var listaAnimação = [
    "https://upload.wikimedia.org/wikipedia/pt/3/3f/Treasure_Planet_%28Disney%29.jpg",
    "https://jardimdasamericas.com.br/uploads/2022/12/capa-filme-gato-de-botas-2-o-ultimo-pedido-784dc-large.jpg",
    "https://static.wikia.nocookie.net/dublagempedia/images/5/5e/Rei-le%C3%A3o.jpg/revision/latest?cb=20210213174247&path-prefix=pt-br",
]
//listaAnimação[0] = 'https://upload.wikimedia.org/wikipedia/pt/3/3f/Treasure_Planet_%28Disney%29.jpg';
//listaAnimação[1] = 'https://jardimdasamericas.com.br/uploads/2022/12/capa-filme-gato-de-botas-2-o-ultimo-pedido-784dc-large.jpg';
//listaAnimação[2] = 'https://static.wikia.nocookie.net/dublagempedia/images/5/5e/Rei-le%C3%A3o.jpg/revision/latest?cb=20210213174247&path-prefix=pt-br';

for (var i=0; i<listaFilmes.length; i++) { //o javascript deixa usar uma variavel como referencia exemplo= listaFilmes.lenght.
    document.write("<img src=" + listaFilmes[i] + ">"); //maineira de escrever no documento html usando javascript.
}

for (var i=0; i<listaSeries.length; i++) {
    document.write("<img src=" + listaSeries[i] + ">");
}

for (var i=0; i<listaAnimação.length; i++) {
    document.write("<img src=" + listaAnimação[i] + ">");
}