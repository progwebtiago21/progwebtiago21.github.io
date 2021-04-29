var imagens, textoAlt;

// criando matrizes para abrigar as imagens e os seus respectivos alt

imagens = [
    "imagens/slide1.jpg",
    "imagens/slide2.jpg",
    "imagens/slide3.jpg"
];

textoAlt = [
    "slider destaque 1",
    "slider destaque 2",
    "slider destaque 3"
];

var contador = 0;
var qtd = imagens.length;  // 3


// criando uma função (ação)
function mudaImagens( ) {

    // acessando a imagem de destaque e modificando dinamicamente seus atributos src e alt
    document.images[1].src = imagens[contador];
    document.images[1].alt = textoAlt[contador];

    contador++;

    // criando um limitador para o contador
    if (contador == qtd) {
        contador = 0;
    }


    // alternar a cada 3 segundos
    setTimeout(mudaImagens, 3000);
}


    // chamando a função
    mudaImagens();