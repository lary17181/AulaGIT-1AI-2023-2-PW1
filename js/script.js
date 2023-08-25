function login(){
    alert("Login realizado com sucesso!")
    var email = document.getElementById("frmemail")
    var password = document.getElementById("frmpassword")
    console.log(email)
    console.log(password)

if(email == "login" && password == "123456"){
    alert("Login realizado com sucesso!")
}
else{s
    alert("Não foi possível realizar o login!")
}}

function Somar(){
    var n1 = parseInt (prompt("Digite o primeiro número: "))
    var n2 = parseInt (prompt("Digite o segundo número: "))
    console.log(typeof(n1))
    console.log(typeof(n2))          
    var resultado= n1 + n2
    alert(resultado) 
        
    
}
function Subtrair(){
    var n1 = prompt("Digite o primeiro número: ")
    var n2 = prompt("Digite o segundo número: ")
    var resultado = n1 - n2
    alert(resultado)
}
function Multiplicar(){
    var n1 = prompt("Digite o primeiro número: ")
    var n2 = prompt("Digite o segundo número: ")
    var resultado = n1 * n2
    alert(resultado)
}
 function Dividir(){
        var n1 = prompt("Digite o primeiro número: ")
        var n2 = prompt("Digite o segundo número: ")
        var resultado = n1 / n2
        alert(resultado)
    }
function Quadrado(){
    var n1 = prompt("Digite o primeiro número: ")
    var resultado = n1^2
    alert(resultado)
}
function nome(){
    const nome = document.getElementById('frmNome').value
    alert(nome)
    document.getElementById('exibirNome').innerHTML = nome
}
function produto(){
    let produto = document.getElementById("frmProduto").value
    login.innerHTML=produto
    alert(produto)
    document.getElementById('produto').innerHTML = produto;
    
}
