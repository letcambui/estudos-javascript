// var nome1 = document.getElementById(nome).value
// var sobrenome = document.getElementById(nome).value

document.getElementById('button').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    alert("Olá " + nome +" " + sobrenome)
}
)