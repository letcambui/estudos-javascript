// Ex 4 e 5

document.getElementById('button').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    alert('O nome completo é: ' + nome + ' e possui ' + nome.length + ' letras.' )
})

// Ex 6
var currentImg=0; // indice 
var imgSrc = [
    "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true",
    "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true"
      
] //array de imagem

function trocar(){
    if (currentImg == imgSrc.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
    {
        currentImg = 0;
    }
    document.getElementById('lampada').src=imgSrc[currentImg]; 
        currentImg++;
}