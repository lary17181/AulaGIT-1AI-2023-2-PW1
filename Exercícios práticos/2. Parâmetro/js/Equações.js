function somanumeros(){
    var resultado= n1 + n2
    console.log(resultado)
}var n1= parseInt(prompt("digite o primeiro número: "))
    var n2= parseInt(prompt("digite o segundo número: "))

function subtrainumeros(n1,n2){
    var resultado = n1 - n2
    console.log(resultado)

}

function criaObjeto(){
    nameuser = prompt("Digite seu nome");
    idadeuser = parseInt(prompt("Digite sua idade"));
    time_favorito = prompt("Digite seu time favorito");
    let usuario = {
        Nome: nameuser,
        Idade: idadeuser,
        Time: time_favorito
    };3 
    console.log(usuario);
}