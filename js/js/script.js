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
function array_exemplo(){
    let n = [3, 4, 5, 6, 2, 1]
    console.log("Esse console log mostra o array completo")
    console.log(n)
    console.log("Esse console log mostra o valor no índice 0 do array")
    console.log(n[0])
    console.log("Esse console log mostra o valor no índice 6 do array"+ n[6])
    console.log(n[6] = "7")
    console.log("Esse console log mostra o valor no índice 6 do array"+ n[6])
    console.log("Esse console log mostra o array completo")
    console.log(n)
    n.push(50)
    n.push(32)
    n.push(33)
    console.log("Esse console log mostra o array completo")
    console.log(n)
    n.pop()
    console.log("Esse console log mostra o array completo")
    console.log(n)

 }   
 function objeto(){
    //produtos
    let carrinho_de_compras = []
    let nome = "Arroz"
    let preco = 9.99
    let marca = "Tio João"

    let produto = { 
        // objeto
        nome_prod: "Arroz", 
        preco_prod: 9.99,
        marca_prod: "Tio João"
    }
    console.log(produto)
    //console.log(produto.nome_prod) > mostra só o nome
    //console.log(produto.preco_prod) > mostra só o preco
    //console.log(produto.marca_prod) > mostra só a marca

 carinho_de_compras.push(produto)

 }