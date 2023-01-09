//exercicio 7
var img = document.querySelector("#lampada");
var lampadaOn = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true';

img.addEventListener('mouseover', (event) => {
    event.target.src = lampadaOn //event.target é utilizada para implementar a delegação de eventos
}
)

var img = document.querySelector("#lampada");
var lampadaOff ='https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true';

img.addEventListener('mouseout', (event) => {
    event.target.src = lampadaOff
})




// for (var i = 0; i < img.length; i++){
//     newImg = img[i];
// }


